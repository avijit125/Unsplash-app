import React,{useState} from 'react'


const Navbar = () => {
    const [formData,setFormData]= useState("");
    return (
        <div className="navbar bg-dark">
            <div className="navbar-brand ms-3 text-light">Unsplash</div>
            <form className="d-flex me-5">
                <input className="form-control me-3" type="search" value={formData} onChange={(e)=>setFormData(e.target.value)} placeholder="Search for Images" aria-label="Search"/>
                <button className="btn btn-outline-success me-2" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Navbar
