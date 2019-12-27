import React from 'react';
import './style.css';
import slider1 from '../../../../assets/slide1.jpg';
import slider2 from '../../../../assets/slide2.jpg';
import slider3 from '../../../../assets/slide3.jpg';

function Carouselfade() {
  return (
      <div id="demo" class="carousel slide carousel-fade" data-ride="carousel">
  <ul class="carousel-indicators">
       <div data-target="#demo" data-slide-to="0" class="circle active slidder-icon">
          <i class="fa fa-user carousel-icon"></i>
       </div>
      <div data-target="#demo" data-slide-to="1" class="circle slidder-icon">
           <i class="fa fa-tv carousel-icon"></i>
      </div >
      <div data-target="#demo" data-slide-to="2" class="circle slidder-icon">
          <i class="fa fa-globe carousel-icon"></i>
      </div>

  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} alt="Los Angeles" />
      <div class="carousel-caption">
          <h2 class="slogan">Only patience<br></br>& persistence <br></br> GIVE GOOD <br></br> RESULTS</h2><br></br>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <h4 class>CLUBS &<br></br>  ORGANIZATIONS </h4>
            </div>
            <div class="col-lg-7 col-md-7 fadeIn">
              <p>
              Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus.
Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec.</p> 
            </div>
            <div class="col-lg-1 col-md-1">
              <div class="circle right-angle">
               <i class="fa fa-angle-right"></i>
              </div>
            </div>
       </div>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={slider2} alt="Chicago" />
      <div class="carousel-caption">
          <h2 class="slogan">Only patience<br></br>& persistence <br></br> GIVE GOOD <br></br> RESULTS</h2><br></br>
          <div class="row">
          <div class="col-md-4 col-lg-4">
        <h4 class>ONLINE <br></br> EDUCATION </h4>
      </div>
      <div class="col-lg-7 col-md-7 fadeIn">
              <p>
              Duis leo velit, ullamcorper a vulputate sed, iaculis eu tortor. Sed vel diam dui, et feugiat nisi. Etiam mauris purus, viverra id iaculis eget, tristique a dolor. Sed convallis molestie lacinia.</p> 
            </div>
            <div class="col-lg-1 col-md-1">
              <div class="circle right-angle">
               <i class="fa fa-angle-right"></i>
              </div>
            </div>
      </div>
      </div>  
      </div>
    <div class="carousel-item">
      <img src={slider3} alt="New York" />
      <div class="carousel-caption">
          <h2 class="slogan">Only patience<br></br>& persistence <br></br> GIVE GOOD <br></br> RESULTS</h2><br></br>
          <div class="row">
            <div class="col-md-4 col-lg-4">
            <h4 class>PROGRESSIVE <br></br> PROGRAMS </h4>
             </div>
             <div class="col-lg-7 col-md-7 fadeIn">
              <p>
              Maecenas blandit semper iaculis. Phasellus quis quam orci, vitae fermentum quam. Donec non odio in dui malesuada molestie. Nunc nulla tortor, ultrices a aliquet non, tincidunt quis metus.</p> 
            </div>
            <div class="col-lg-1 col-md-1">
              <div class="circle right-angle">
               <i class="fa fa-angle-right"></i>
              </div>
            </div>

          </div>
      </div>   
    </div>
  </div>
</div>


  )
}

export default Carouselfade
