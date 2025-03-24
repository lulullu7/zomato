import React from 'react'
import './App.scss'
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdArrowRight } from "react-icons/md";

function app() {
  return (
    <div>
      {/* section 1 */}
      <section className='first_section_main'>
        <div className='first_section_innerdiv'>
          <div className='first_section_nav'>
            <div className='first_section_nav_left'>
              <p>Get the app</p>

            </div>
            <div className='first_section_nav_right'>
              <p>Investor Relation</p>
              <p>Add Restaurant</p>
              <p>Login</p>
              <p>Signup</p>

            </div>
          </div>
          {/* logo */}
          <div className='first_section_middle'>
            <img height={'60px'} width={'25%'} src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
            <h1 className='first_section_middle_heading'>Discover the best food & drinks in Kochi </h1>
            <div className='first_section_middle_inputmain'>
              <select className='first_section_middle_location'>
                <option> location</option>
              </select>
              <FaLocationDot className='first_section_middle_location_icon' />
              <TiArrowSortedDown className='first_section_middle_downarrow_icon' />
              <p className='line'>|</p>

              <input type="text" placeholder='search for restaurant , cuisine or a dish' className='first_section_middle_search' />
              <IoIosSearch className='first_section_middle_search_icon' />
            </div>

          </div>

        </div>

      </section>

      {/* section 2 */}
      <section className='second_section_main'>
        <div className='second_section_innerdiv_main'>
          <div className='second_section_card_main'>
            <img className='second_section_card_image' height={'170px'} width={'100%'} src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp" alt="" />
            <div className='second_section_card_content'>
              <p style={{ fontSize: '23px', color: 'rgba(11, 11, 11, 0.83)' }}>Order online</p>
              <p style={{ marginTop: '5px' }}>stay home and order to your dooorstep</p>
            </div>
          </div>
          <div className='second_section_card_main'>
            <img className='second_section_card_image' height={'170px'} width={'100%'} src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp" alt="" />
            <div className='second_section_card_content'>
              <p style={{ fontSize: '23px', color: 'black' }}>Order online</p>
              <p style={{ marginTop: '5px' }}>stay home and order to your dooorstep</p>
            </div>
          </div>

        </div>

      </section>

      {/* collection section 3 */}

      <section className='third_section_main'>
        <div className='third_section_innerdiv_main'>
          <div className='third_section_heading'>Collection</div>
          <div className='third_section_subheading_main'>
            <div className='third_section_subheading_left'>
              <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</p>
            </div>
            <div className='third_section_subheading_right'>
              <p>All collections in Kochi</p>
              <MdArrowRight style={{ fontSize: '30px' }} />
            </div>
          </div>
          <div className='third_section_card_main'>
            <div className='third_section_card_onebyone card_one' >
              <p className='third_section_card_onebyone_heading'>Places for art lovers</p>
              <p className='third_section_card_onebyone_subheading'>7 places       <MdArrowRight style={{ fontSize: '30px' }} /></p>

            </div>
            <div className='third_section_card_onebyone card_two'>
              <p className='third_section_card_onebyone_heading'>Places for art lovers </p>
              <p className='third_section_card_onebyone_subheading'>7 places <MdArrowRight style={{ fontSize: '30px' }} /></p>
            </div>
            <div className='third_section_card_onebyone card_three'>
              <p className='third_section_card_onebyone_heading'>Places for art lovers</p>
              <p className='third_section_card_onebyone_subheading'>7 places <MdArrowRight style={{ fontSize: '30px' }} /></p>
            </div>
            <div className='third_section_card_onebyone card_four'>
              <p className='third_section_card_onebyone_heading'>Places for art lovers </p>
              <p className='third_section_card_onebyone_subheading'>7 places <MdArrowRight style={{ fontSize: '30px' }} /></p>
            </div>
          </div>

        </div>
      </section>



    </div>
  )
}

export default app