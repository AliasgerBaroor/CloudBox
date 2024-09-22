"use client"
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import Sidebar from "@/shared/Sidebar";
import { helpQuestion } from "@/static/StaticContent";


const Help = () => {
  return (
    <>
      <div className="wrapper">
<Sidebar />{" "}
    <Navbar />
   <div className="content-page">
   <div className="container-fluid" style={{ padding: "110px 15px 0px;" }}>
  <div className="row mt-3">
    {helpQuestion.map((question) => (
  <div className="col-lg-4 col-md-6" key={question.id}>
<div className="card">
<div className="card-header">
{question.type}
</div>
<div className="card-body">
<h3>{question.title}</h3>
<blockquote className="blockquote">
<p className="mb-0 mt-2">{question.content}</p>
</blockquote>
</div>
</div>
</div>
    ))}
  </div>
</div>
</div>

      </div>
      {/* Wrapper End*/}
      <Footer />


    </>
  )
}

export default Help