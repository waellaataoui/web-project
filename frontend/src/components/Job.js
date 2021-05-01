import React, {useState, useEffect} from 'react'
import  axios from "axios"

const Job = () => {
    const [data, setData] = useState([])

    var date = new Date('2021-04-29 17:12:50')
    var now = new Date().getTime() /1000;
    const fetchPosts =     async (min="",max=
    "",category="",location="") => {

        const res = await axios.get(`/posts?min=${min}&max=${max}&category=${category}&location=${location} `);
        console.log(res.data);
        setData(res.data);
      
        }
    useEffect(() => {
 
          fetchPosts();           
    }, [])


    return(

        <div>
            {data.map((job ,index) => (
                    <div key={index}>
                        <div className="single-job-items mb-30">
                        <div className="job-items">
                        <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list4.png" alt=""></img></a>
                        </div>
                        <div className="job-tittle job-tittle2">
                            <a href="#">
                                <h4> {job.title}</h4>
                            </a>
                            <ul>
                                <li>{job.employeur.fullname}</li>
                                <li><i className="fas fa-map-marker-alt"></i>{job.location} </li>
                                <li>{job.price} </li>
                            </ul>
                        </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                            <a href="job_details.html">{job.jobType} </a>
                            <span>{(now - (date.getTime()/1000))/3600} </span>
                        </div>
                        <br />
                    </div>
                    </div>
                ))}
        </div>

            
                
                    
            
        
    )
}
export default Job;