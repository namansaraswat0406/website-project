import React from 'react';
import "./footerComponent.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    // <div className='footerStyle'>
    //   <MDBFooter className='bg-dark text-center text-white'>
    //     <MDBContainer className='p-4 pb-0'>
    //       <section className='mb-4'>
    //         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //           <MDBIcon fab icon='facebook-f' />
    //         </MDBBtn>

    //         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //           <MDBIcon fab icon='twitter' />
    //         </MDBBtn>

    //         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //           <MDBIcon fab icon='google' />
    //         </MDBBtn>
    //         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //           <MDBIcon fab icon='instagram' />
    //         </MDBBtn>

    //         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //           <MDBIcon fab icon='linkedin-in' />
    //         </MDBBtn>

    //         <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //           <MDBIcon fab icon='github' />
    //         </MDBBtn>
    //       </section>
    //     </MDBContainer>

    //     <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    //       © 2022 Copyright:
    //       <a className='text-white' href='https://mdbootstrap.com/'>
    //         WildLife.com
    //       </a>
    //     </div>
    //   </MDBFooter>
    // </div>

    <footer className='styleFooter'>
     <div className='about'>
     <h1>About Us:-</h1>
     <hr></hr>
     <p> hgfsjgdfjsdgfj\gfajsgfajsgfasjdgfasjbhg </p>
     <p> hgfsjgdfjsdgfj\gfajsgfajsgfasjdgfasjbhg </p>
     <p> hgfsjgdfjsdgfj\gfajsgfajsgfasjdgfasjbhg </p>
     <p> hgfsjgdfjsdgfj\gfajsgfajsgfasjdgfasjbhg </p>
     </div>
     <div classname='footerForm'>
     <form>
     <h1 className='footerFormHead'>Get a response from Us:-</h1>
     <hr></hr>
     <input className='pacestyle' type='text' placeholder='Name'></input><br></br>
     <input className='pacestyle' type='email' placeholder='Email'></input><br></br>
     <input className='pacestyle' type='tel' placeholder='Phone No.'></input><br></br>
     <button className='subBtn'>Submit</button>
     </form>
     </div>
     <div className='footerContact'>

     <div className='contactDetails'>
     <h1>Contact Us:-</h1>
     <hr></hr>
     <p>+91 7055-180-325</p>
     <p>namansaraswat7055@gmail.com</p>
     </div>

     <div className='socialMedia'>
     <h1>Follow Us:-</h1>
     <hr></hr>
     <img className='socPic' src='./img/fb.png' alt='facebook Image'></img>
     <img className='socPic' src='./img/ig.png' alt='Instagram Image'></img>
     <img className='socPic' src='./img/lkd.png' alt='linkdin Image'></img>
     </div>
     
    
     </div>
    </footer>
  );
}
export default Footer;