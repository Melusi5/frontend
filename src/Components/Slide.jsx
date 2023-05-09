import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1191254429/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=DFQciAbGIbvwXdTvnuIrV-_eyllvdsRwZtGPtOEVybw="
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1212526330/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iIQ5wqa4NYpLn0YJvT_NAzMilwTFkTlprwbXAasOn9s="
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc="
          alt="Third slide"
        />

        <Carousel.Caption>
          
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
