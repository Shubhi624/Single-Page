import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscGraph } from "react-icons/vsc";
import { TbBasketSearch } from 'react-icons/tb';
import { PiDevicesLight } from 'react-icons/pi';
import { BsFileEarmarkText } from 'react-icons/bs';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { MdOutlineWatchLater, MdPersonAddAlt } from 'react-icons/md';
import { ImFileText2 } from 'react-icons/im';
import { TiMessages } from 'react-icons/ti';
import { RiCurrencyLine } from 'react-icons/ri';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import Accordion from 'react-bootstrap/Accordion';
import { TfiLinkedin } from 'react-icons/tfi';
import { SiVerdaccio } from 'react-icons/si';

function App() {
  return (
    <div className='container-fluid'>
      {/* Step-1 */}

      <div className='step1' >
        <div className='d-flex text-dark justify-content-between align-items-center p-3 flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row'>
          <nav className='d-flex'>
            <span className='fs-3 d-flex justify-content-center'><SiVerdaccio /></span>
            <span className='mx-1 fw-bold p-1'>Vitrag Vasa</span>
          </nav>
          <nav className='d-flex justify-content-evenly w-25 flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row'>
            <a className="nav-link " href="#">Home</a>
            <a className="nav-link " href="#">About</a>
            <a className="nav-link " href="#">FAQ's</a>
          </nav>
          <div className='text-end fw-bold'>
            <button type="button" className="btn btn-outline-dark px-4 py-0">Book A Call</button></div>
        </div>
        <div className='S d-flex'>
          <div className='S1img1 overflow-y-hidden'>
            <img src='https://s3-alpha-sig.figma.com/img/d162/832f/9637ea7330d37d53ff30c4ed41cff002?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ah6XWgteYQAMAfXY9mN7UNQkgLCGAsgIo~chhoLydV0OjCGwLfC22bLB7b5mgImkjsbPXd~VbNPln-1AwuvW8h5FR0XQYbLnGm-tsTRV0-0T5LTaXVMNyvo~jtpM-QLgM5zlmZSrDnh9IrXGq52mSQ5taznbFWNwB1CLsNKVRXTaymVeSgdOQb4b-~5GRZP4fs5ViYDjnbW0oUiOgZu4xQd6h7Z6OBkaPz~uOwfvOctF1C15hUzl3QmsvUaNyAOylg-e5TK1KenOxCa5WS28vAKivzyd6QBUJPtzr5blZlltqq5ptMyEO8JD0H3dL3fKTgRkc1wRgBA0C7KkMFDXCA__' />
          </div>
          <img className='Arrow' src='https://s3-alpha-sig.figma.com/img/50c1/c9c8/4ff712a0b3450b8a2b5960f03f460d6f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h20bTOjyiZTjfIPtMU3vo9xUrNuE44E0Mlz05e4YIEGvkMts7TXSbo30t7Jufy2izWCmZvapgx7yKMEOHGWbtE0jwv0ZHWSc-GooAFltwJZ~f40dc5V4gxk9IVblo13gViVO-N0Sje2vFkBEErf9YhrDGPMsDlo~X7Tc8a2GB9an4hozJ2SwYXadrLwbyy6g7h3VTbEujOWVbrWgBSosJ09jNknjgVtCm21AyFwHifKUE1yyEygEKWTWB3P35Tk2M1iKKd-uCVDRdxICKXPKytPbdbjYwtgduMuqwhbpKQ6-oVBrnxf5U36FBfnaei4ZI1lgyHVpx074Jf8b0cb1lw__' />
          <h2 className='V d-flex justify-content-center'>Vitrag Vasa</h2>
        </div>
        <div className='fund'>
          <p className='mb-0'>Funding raised till date:</p>
          <p className='fw-bold fs-2 text-start'>$9M+</p>
        </div>
        <div className='d-flex flex-column justify-content-center fs-5 mt-5 pb-5'>
          <p className='p-0 m-0'>0.5% of start-ups are able to raise funds, I help you get into that 0.5%</p>
          <p className='p-0 m-0'>with my <span className='fw-bold'>Fundraising Founder Cohort.</span></p>
        </div>
      </div >
      {/* Step-2 */}

      <div className='step2 row justify-content-center mt-5'>
        <div className='twoimg w-75 d-flex justify-content-center'>
          <div className='mt-5 mx-5'>
            <div className='fs-2'>
              <p className='p-0 m-0'>I raised <span className='fw-bold'>30 Cr</span></p>
              <p className='p-0 m-0'><span className='fw-bold'>($3.7M)</span> for <span className='fw-bold'>Franklin</span></p>
              <p className='p-0 m-0'><span className='fw-bold'>EV</span> in 3 months.</p>
            </div>
            <div className='mt-3' >
              <p>Read what the founder has to say about me.</p>
              <button type="button" className="btn btn-outline-dark px-3 py-0 fw-bold">Founder's View</button>
            </div>
          </div>
          <div className='mt-5 d-flex w-50'>
            <img className='w-75 justify-content-end' src='https://s3-alpha-sig.figma.com/img/a5a4/bee8/74f13f1a4edcf7b710c7d04db7b4cd85?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoofe56R5JEfErw6Eo8Zh3S62g8rCY1H8Ck1Zon~fG1o1C4ZyTG0hNYvf91ed2JD9ftF5pqZnjwMdRb7PqTlGgIkP2Na8oFye3luUHUp21iSRG0FsGIir0d5TuhacsxF-QRn3qtXU1~39wVp~AmX7MtNS6N--OSHa83oPa4xDD3dvMi6A-Qg1YUzFd13gY-d39TPIa7gCW6Ru2jKRl2-yTF~vVjqVCfJW3jSJnfJv-fpvvCY3ZIsfPZ1fFmFKX44UZEdqgQhGHDRgOBabL-scx14UL920kPJeFcvAhzUXonnlUdZZUoqy4siaMVt1Zw~WiZUdya0H0Vqhcd1NJkF1A__' />
          </div>
          <div className='EVLogo'>
            <img className='mt-2 mx-2' src='https://s3-alpha-sig.figma.com/img/7231/e1d7/c15e1bf189f299886df37f5dbab96536?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hv6DmI1~BW3r1hzce3-yFr4sDTGOu6CTxOjmuv7loW6vicqFKQODRJ99jAMoSWWTUCLKZjcLXAO-0KbEoETR6GIzrU6spF57rg8eolymVFGCEYGUFmh2tjxEo0DoHxg6Wyh14PoGw00B8tXI1SD-g1xoRl~p8JzEZx5dcPfWOHd7sQ~XhFufsfoonBN6Fus1oRypn3s9rsqizg1s-fTQ9KJEBpJNeeFXMK3HKZ6RTLEMcUGC~x-iAHgB2NKwh-UdqX4qqKK4Vu9ndC8LVLDMkez35vyDK88bVRwuRRUPR0DmM57uLATqpnojxIYP2yl13NotR8i7g~eW~2D9oBFBgw__' />
          </div>
        </div>
      </div>
      {/* Step-3 */}

      <div className='step3 mt-5' >
        <div className='d-flex justify-content-center'>
          <div className='boxs pb-4'>
            <h1 className='mt-4 fw-bold d-flex justify-content-center'>Fundraising is Hard</h1>
            <div className='d-flex mt-4 justify-content-center flex-wrap'>
              <div className="card text-bg-light mb-3 mx-1" style={{ width: '10rem' }}>
                <div className="card-header fw-bold">Month 1</div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text pt-2">Prepare Pitch deck and financial model</p>
                  <div className='d-flex'>
                    <span><MdOutlineWatchLater /></span>
                    <p className='ps-1'>1 Month</p>
                  </div>
                </div>
              </div>
              <div className="card text-center text-bg-light mb-3 mx-1" style={{ width: '10rem' }}>
                <div className="card-header fw-bold">Month 2</div>
                <div className="card-body d-flex flex-column align-items-center">
                  <p className="card-text pt-2">Get Investor ready and reach out to Investors</p>
                  <div className='d-flex'>
                    <span><MdOutlineWatchLater /></span>
                    <p className='ps-1'>1 Month</p>
                  </div>
                </div>
              </div>
              <div className="card text-center text-bg-light mb-3 mx-1" style={{ width: '20rem' }}>
                <div className="card-header fw-bold">Month 3 & 4</div>
                <div className="card-body d-flex flex-column align-items-center">
                  <p className="card-text pt-2">Continuous pitches and meeting with Investors</p>
                  <div className='d-flex pt-3'>
                    <span><MdOutlineWatchLater /></span>
                    <p className='ps-1'>2 Month</p>
                  </div>
                </div>
              </div>
              <div className="card text-center cardRed mb-3 mx-1" style={{ width: '10rem' }}>
                <div className="card-header fw-bold">Month 5</div>
                <div className="card-body d-flex flex-column align-items-center">
                  <p className="card-text pt-2">Term sheet, negotiations and Due diligence</p>
                  <div className='d-flex text-danger'>
                    <span><MdOutlineWatchLater /></span>
                    <p className='ps-1'>1 Month</p>
                  </div>
                  <div className='bg-danger rounded text-white'>More than 99% fail to raise</div>
                </div>
              </div>
              <div className="card text-center cardGreen mb-3 mx-1" style={{ width: '10rem' }}>
                <div className="card-header fw-bold">Month 6</div>
                <div className="card-body d-flex flex-column align-items-center">
                  <p className="card-text pt-2">Cash in the Bank</p>
                  <div className='d-flex pt-5 text-success'>
                    <span><MdOutlineWatchLater /></span>
                    <p className='ps-1'>1 Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center mt-4 pt-4 fs-5 fw-semibold'>
          <p className='mb-0 pb-0'>Getting the right set of documents and knowledge for navigating these 3-6 month journey is a must.</p>
          <p className='mt-0 pt-0'> That is why I have created Founder Fundraising Cohort.</p>
        </div>
      </div >
      {/* Step-4 */}

      <div className='step4 mt-5' >
        <div className='d-flex justify-content-center'>
          <div className='boxs pb-4'>
            <h1 className='mt-4 fw-bold d-flex justify-content-center'>Fundraising is Hard</h1>
            <div className='d-flex mt-4 justify-content-center flex-wrap'>
              <div className='card-group mt-3'>
                <div className="card text-bg-light mb-3 position-relative text-center" >
                  <div className="d-flex align-items-center position-absolute top-0 start-50 translate-middle badge text-dark fs-3 bg-secondary-subtle p-2 rounded-circle ">
                    {/* <span> */}
                    <VscGraph />
                    {/* </span> */}
                    {/* <span className="visually-hidden">Graph</span> */}
                  </div>
                  <div className="card-body">
                    <div className='timer d-flex justify-content-center mt-3'>
                      <span><MdOutlineWatchLater /></span>
                      <p className='ms-1'>Month 1</p>
                    </div>
                    <p className="card-text">Prepare Pitch deck and financial model</p>
                  </div>
                </div>
                <div className="card text-bg-light mb-3 position-relative text-center" >
                  <div className="d-flex align-items-center position-absolute top-0 start-50 translate-middle badge text-dark fs-3 bg-secondary-subtle p-2 rounded-circle ">
                    {/* <span> */}
                    <TbBasketSearch />
                    {/* </span> */}
                    {/* <span className="visually-hidden">Search</span> */}
                  </div>
                  <div className="card-body">
                    <div className='timer d-flex justify-content-center mt-3'>
                      <span><MdOutlineWatchLater /></span>
                      <p className='ms-1'>Month 2</p>
                    </div>
                    <p className="card-text">Get Investor ready and reach out to Investors</p>
                  </div>
                </div>
                <div className="card text-bg-light mb-3 position-relative text-center" >
                  <div className="d-flex align-items-center position-absolute top-0 start-50 translate-middle badge text-dark fs-3 bg-secondary-subtle rounded-circle p-2">
                    {/* <span> */}
                    <PiDevicesLight />
                    {/* </span> */}
                    {/* <span className="visually-hidden">Meeting</span> */}
                  </div>
                  <div className="card-body">
                    <div className='timer d-flex justify-content-center mt-3'>
                      <span><MdOutlineWatchLater /></span>
                      <p className='ms-1'>Month 3 & 4</p>
                    </div>
                    <p className="card-text">Continuous pitches and meeting with Investors</p>
                  </div>
                </div>
                <div className="card text-bg-light mb-3 position-relative text-center" >
                  <div className="d-flex align-items-center position-absolute top-0 start-50 translate-middle badge text-dark fs-3 p-2 rounded-circle cardRed">
                    {/* <span> */}
                    <BsFileEarmarkText />
                    {/* </span> */}
                    {/* <span className="visually-hidden">Text</span> */}
                  </div>
                  <div className="card-body">
                    <div className='timer d-flex justify-content-center mt-3 text-danger'>
                      <span><MdOutlineWatchLater /></span>
                      <p className='ms-1'>Month 5</p>
                    </div>
                    <p className="card-text">Term sheet, negotiations and Due diligence</p>
                  </div>
                  <div className='bg-danger text-white mx-4 px-2 mb-4 rounded'>More than 99% fail to raise</div>
                </div>
                <div className="card text-bg-light mb-3 position-relative text-center" >
                  <span className="d-flex align-items-center position-absolute top-0 start-50 translate-middle badge fs-3 text-dark cardGreen p-2 rounded-circle">
                    {/* <span> */}
                    <HiOutlineCurrencyDollar />
                    {/* </span> */}
                    {/* <span className="visually-hidden">Cash</span> */}
                  </span>
                  <div className="card-body">
                    <div className='timer d-flex justify-content-center mt-3 text-success'>
                      <span><MdOutlineWatchLater /></span>
                      <p className='ms-1'>Month 6</p>
                    </div>
                    <p className="card-text">Cash in the Bank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center mt-4 pt-4 fs-5 fw-semibold'>
          <p className='mb-0 pb-0'>Getting the right set of documents and knowledge for navigating these 3-6 month journey is a must.</p>
          <p className='mt-0 pt-0'> That is why I have created Founder Fundraising Cohort.</p>
        </div>
      </div >
      {/* Step-5 */}

      <div className='step5 pb-4' >
        <p className='fs-2 mt-5 text-center pb-3'>I’ve helped <b>30+ Companies Raise Funds</b></p>
        <div className='logos d-flex justify-content-center flex-wrap'>
          <div className='mx-5'>
            <div className='EV d-flex justify-content-center align-items-center'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/7231/e1d7/c15e1bf189f299886df37f5dbab96536?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hv6DmI1~BW3r1hzce3-yFr4sDTGOu6CTxOjmuv7loW6vicqFKQODRJ99jAMoSWWTUCLKZjcLXAO-0KbEoETR6GIzrU6spF57rg8eolymVFGCEYGUFmh2tjxEo0DoHxg6Wyh14PoGw00B8tXI1SD-g1xoRl~p8JzEZx5dcPfWOHd7sQ~XhFufsfoonBN6Fus1oRypn3s9rsqizg1s-fTQ9KJEBpJNeeFXMK3HKZ6RTLEMcUGC~x-iAHgB2NKwh-UdqX4qqKK4Vu9ndC8LVLDMkez35vyDK88bVRwuRRUPR0DmM57uLATqpnojxIYP2yl13NotR8i7g~eW~2D9oBFBgw__' />
            </div>
            <p className='mt-2'>Funds Raised: $3.7M</p>
          </div>
          <div className="vr"></div>
          <div className='mx-5'>
            <div className='EV d-flex justify-content-center align-items-center'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/795b/8a41/61abf793020a91f700ca324699eb19eb?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mZR-QZDBX8g5ZqNFoazSJkfxFShVLtQRyf50-eV~ZvNjaX6u7wFfebP3S0NkjkXliWwMnOxMlQ7AbCpVpB26HWYZvHrFcekWI1eMvzKxfg~Idqt-EzDtU4CheUIs3r7~dTtZTAXW175d3Zk-PR2hHHZqZjvb9J4421OAFWuiUqMft7C58a4kXtngNG1hsvO6vqcMk-X3CcJORyDVfihT2PElxwaWUCSCkYPUo6yZ1Gcu6fAGwRrU-nENseAtRivnhljZthT7kCdn9SGjMjaddOciTGzKTwJ~7oTqDQAf~M9kKil7hvi5-PL00GtxVok0IJL0nSPrImZbANinUesSHQ__' />
            </div>
            <p className='mt-2'>Funds Raised: $250k</p>
          </div>
          <div className="vr"></div>
          <div className='mx-5'>
            <div className='EV d-flex justify-content-center align-items-center'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/4386/b43c/a5fb7fefb28f5d4e4190fb42879578a9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g36ylM5qdjof5o2z5yBAIAac4aecoyXFKzjbOoJU1SgkEQdScPEf7PeOAZPsYlim11pxEXUCn6caHBMqEDUA-v2X7kGdJ6wJZ2ceJ61bwnZq2qUqcvTn1i2CuZlciLi8xK95seAaq6EeBPL3ZuLy0EgH1KXRs0la7hxV9K4LHFVto78gCPwB0RiPVjmNMDUQ872szRQ-G0buCnw9cj6OKCGyhp-I0zqrYgNASuuNW9fckEd--u0Brl7zZUvfIF49FhgcQhdR4LZ4f-1Ms6k~BxzljN0oud-FVvc4I3NJrcdzvbueIiPOarBWHIHTIqJzrPpPK-no9W61nogvhMaZbg__' />
            </div>
            <p className='mt-2'>Funds Raised: $500k</p>
          </div>
          <div className="vr"></div>
          <div className='mx-5'>
            <div className='EV d-flex justify-content-center align-items-center'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/7f7f/9d08/e9e432f2010aa37b874a731c3182da0d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g2OUkYlgwUwk7l-vR8ToOP8-EWvUKj1SkMFJbCA0bmxbOz1E5brmCiamJLWH3~XZ8GDcN4qym0Q7ZbQiAP73FuwYSO7Bk1zjDXI2HaE62XF3FEZz1uII89QvhcclzfHLUKM6p2oz3CP1SAcPV-mc-FIe0TSM~KrKBvqTSyJsU7zcUUF0WGMffZ8JSWjTCNI9tt7~tdrL8HqIpCLRbs~700OtF20CHCSqUN7G3IaGRc7geDnog-04Tan~4v9AR9qb3LDR72NblSJkVlx7tmblrQ0t6ZoR34ZiqxJaOYpK3SZ8YlaZOSVchX7lVokUNSA84fdKp2rp0VkNE1fegJSrpg__' />
            </div>
            <p className='mt-2'>Funds Raised: $1.5M</p>
          </div>
        </div>
      </div >
      {/* Step-6 */}

      <div className='step6 my-5 m-auto w-75 rounded-4 py-5' >
        <div className='head p-2 text-white text-center'>
          <h1 className='d-flex justify-content-center mt-2'>How Do I Help?</h1>
          <p className='d-flex justify-content-center'>I help you raise funds with my Fundraising Founder Cohort</p>
        </div>
        <div className='d-flex justify-content-center my-2 flex-wrap'>
          <div className='card mb-3 mx-2' style={{ width: "8rem" }}>
            <div className="card-body cardLight">
              <span className='fs-2 d-flex justify-content-center'><MdPersonAddAlt /></span>
              <p className="card-text text-center">A Great Pitch Deck</p>
            </div>
          </div>
          <div className='fw-bold fs-2 mt-4 pt-4 text-white'>+</div>
          <div className="card mb-3 mx-2" style={{ width: "8rem" }}>
            <div className="card-body cardLight">
              <span className='fs-2 d-flex justify-content-center'><VscGraph /></span>
              <p className="card-text text-center">Realistic Financial Model</p>
            </div>
          </div>
          <div className='fw-bold mt-4 fs-2 pt-4 text-white'>+</div>
          <div className="card mb-3 mx-2" style={{ width: "8rem" }}>
            <div className="card-body cardLight">
              <span className='fs-2 d-flex justify-content-center'><ImFileText2 /></span>
              <p className="card-text text-center">Follow-on documents</p>
            </div>
          </div>
          <div className='fw-bold mt-4 fs-2 pt-4 text-white'>+</div>
          <div className="card mb-3 mx-2" style={{ width: "8rem" }}>
            <div className="card-body cardLight">
              <span className='fs-2 d-flex justify-content-center'><TiMessages /></span>
              <p className="card-text text-center">7 hours of fundraising mentorship</p>
            </div>
          </div>
          <div className='fw-bold mt-4 fs-2 pt-4 text-white'>=</div>
          <div className="card mb-3 mx-2" style={{ width: "8rem" }}>
            <div className="card-body cardGreen">
              <span className='fs-2 d-flex justify-content-center text-success'><RiCurrencyLine /></span>
              <p className="card-text text-center text-success">Successful Funding</p>
            </div>
          </div>
        </div>
      </div>
      {/* Step-7 */}

      <div className='step7 mb-5 mt-5'>
        <p className='d-flex justify-content-center fs-3 align-items-center'><b>Pitch deck -</b> that get you meetings</p>
        <div className='cont4 d-flex justify-content-between mx-auto w-75 flex-wrap'>
          <div class="card" style={{ width: "12rem", border: "none" }}>
            <div class="mt-4 ">
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Cover Slide
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Storyline
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Problem
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Solution
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Product
                </span>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "12rem", border: "none" }}>
            <div class="mt-4">
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Go To Market
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Usp
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Competitor Analysis
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Why Now?
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Financial Projections
                </span>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "12rem", border: "none" }}>
            <div class="mt-4 ">
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Cover Slide
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Storyline
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Problem
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Solution
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Product
                </span>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "12rem", border: "none" }}>
            <div class="mt-4">
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Go To Market
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Usp
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Competitor Analysis
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Why Now?
                </span>
              </div>
              <div class="list-group-item d-flex mb-1">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Financial Projections
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step-8 */}
      <div className='step8 text-bg-light mb-5 pb-5'>
        <div className='d-flex justify-content-center mt-5 pt-5'>
          <h1>Financial Model</h1>
        </div>
        <div className='d-flex justify-content-center mt-5 flex-wrap'> {/*contain 5 box*/}
          <div className='card mb-3 mx-1' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">Define Reasonable Assumptions</p>
            </div>
          </div>
          <div className='card mb-3 mx-1' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">Fund Utilization</p>
            </div>
          </div>
          <div className='card mb-3 mx-1' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">Manpower Planning</p>
            </div>
          </div>
          <div className='card mb-3 mx-1' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">Expense Analysis</p>
            </div>
          </div>
          <div className='card mb-3 mx-1' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">Income Statement & Balance Sheet</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center flex-wrap'>{/*contain 3 box*/}
          <div className='card mb-3 mx-1 bg-danger bg-opacity-10' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">Cash Flow Analysis</p>
            </div>
          </div>
          <div className='card mb-3 mx-1' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">Working Cap Analysis</p>
            </div>
          </div>
          <div className='card mb-3 mx-1 bg-danger bg-opacity-10' style={{ width: "12rem", border: "none" }}>
            <div className="card-body text-center">
              <span className='fs-2 d-flex justify-content-center'><LiaChalkboardTeacherSolid /></span>
              <p className="card-text">DCF Valuation (Pre & Post Money Valuation)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step-9 */}
      <div className='step9 mb-5 mt-5 m-auto pt-5'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h1 className='mb-4 pb-4'>Fundraising Mentorship</h1>
          <p className=' w-75 text-center'>For 7 hours straight, I will show you the practical process I used to raise funding for startups. You will get to see the real process I followed for 3 months to close a 30 Cr funding round. This is my USP.</p>
        </div>
        <div className='cont4 d-flex justify-content-between mx-auto w-75 '>
          <div class="card mx-3" style={{ border: "none" }}>
            <div class="mt-4">
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Drafting exhaustive list of questions investors ask
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Preparing accurate answers to these questions
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  2 sessions to practice and improve pitching
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Finding investors
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Conducting meetings
                </span>
              </div>
            </div>
          </div>
          <div class="card mx-3" style={{ border: "none" }}>
            <div class="mt-4">
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Carrying out fundraising process
                </span>
              </div> <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Best practices to fundraise efficiently
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Understanding Term sheet
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Negotiating term sheet
                </span>
              </div>
            </div>
          </div>
          <div class="card mx-3" style={{ border: "none" }}>
            <div class="mt-4">
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Due diligence preparation (1 hr consultation with reputed lawyer)
                </span>
              </div> <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Pre-and post-funding compliance
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Mistakes to avoid while fundraising
                </span>
              </div>
              <div class="list-group-item d-flex mb-2 align-items-center">
                <span className='rounded p-1 bg-body-secondary d-flex justify-content-center align-items-center fs-4'>
                  <LiaChalkboardTeacherSolid />
                </span>
                <span className='ms-1'>
                  Mistakes to avoid while fundraising
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step-10 */}
      <div className='step10 mt-5 m-auto w-75 rounded-4'>
        <div className='d-flex justify-content-center flex-column fs-2 py-5 text-white brightText'>
          <p className='text-center mb-0 pb-0'><b>Let's create your fundraising playbook</b> that gets you</p>
          <p className='text-center mt-0 pt-0'>multiple term sheets.</p>
          <div className='sm-2 fw-bold d-flex justify-content-center'>
            <button type="button " className="btn btn-outline-light px-4 py-0">Book A Call</button>
          </div>
        </div>
      </div>

      {/* Step-11 */}

      <div className='step11 mt-5 mb-5 m-auto w-75'>
        <h1 className='d-flex justify-content-center'>FAQ's</h1>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Fundraising Founder cohort, and why did you create it?</Accordion.Header>
            <Accordion.Body>
              The price of this cohort is X. The value you get is 100 times more that the price you are paying (trust me when I say this). I charge for the quality I give and experience I have in fundraising.

              This cohort is for serious founders who want to raise funding of $50k to $10M. By this cohort, you will end up with:

              A great pitch deck
              A realistic financial model
              A follow-on document
              A sheet of questions that investors will ask and answers to it (we develop answers together)
              Preparation of your Data Room for due diligence (with lawyer)
              5 hours of live fundraising mentorship sessions from me where I share detailed fundraising strategy
              2 hours of pitching practice with me
              Doubt clearing session to clear all your doubts related to fundraising.

              Your investment into this cohort is going to change your fundraising game. I suggest you booking a free call with me in case you have any doubts
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is the price of this cohort, and what are the deliverables from your side?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>I need only pitch deck, can you develop it for me?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How much time do I have to invest?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How much time does it take for you to complete a pitch deck and financial model?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Why should you develop my pitch deck?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Can you show me pitch decks you have developed?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>How do I know if your fundraising cohort is right for me?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>I have urgent requirement, Can you develop pitch deck within 1-2 days?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>I have other questions that are not answered in this FAQs</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <footer className='fs-3 fw-bold bg-secondary p-3 d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <span className='fs-3 d-flex justify-content-center ms-5 ps-5'><SiVerdaccio /></span>
          <span className='ms-2'>Vitrag Vasa</span>
        </div>
        <span className='me-5 pe-5'><TfiLinkedin /></span>
      </footer>
    </div>
  );
}

export default App;
