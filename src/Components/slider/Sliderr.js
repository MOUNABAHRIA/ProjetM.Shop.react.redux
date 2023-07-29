import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Sliderr = () => {
  return (

        <Carousel>
          <Carousel.Item>
          <img
        className=" w-100 img-fluid"
        src="https://static.vecteezy.com/system/resources/thumbnails/014/173/980/small/shopping-cart-with-magnifying-icon-block-and-laptop-computer-with-marketplace-website-technology-ecommerce-seo-search-engine-optimization-advertising-keyword-and-online-payment-concept-photo.jpg"
        alt="First slide"
      />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <img
        className=" w-100 img-fluid"
        src="https://blog.shift4shop.com/hubfs/iStock-868776554.jpg"
        alt="First slide"
      />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item> 
          <Carousel.Item>
          <img
        className=" w-100 img-fluid"
        src="https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1557821552-17105176677c%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8M3x8b25saW5lJTIwY2FydHxlbnwwfHx8fDE2ODkyNjkyOTJ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Donline%252520cart%26blend%3D000000"
        alt="First slide"
      />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      );
    }
    



export default Sliderr