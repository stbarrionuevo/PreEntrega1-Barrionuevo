import React from 'react';

const Destacados = () => {
 return( 
  <> 
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/mqgv7Hc/car.jpg" className="d-block img-error  " alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/NjVvCdb/car2.jpg" className="d-block  img-error" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/fXNMXgZ/car3.jpg" className="d-block  img-error" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
 )

}
export default Destacados;