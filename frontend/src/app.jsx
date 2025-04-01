import React from 'react'
import './App.scss'
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdArrowRight } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <img className='second_section_card_image' height={'170px'} width={'100%'} src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp" alt="" />
            <div className='second_section_card_content'>
              <p style={{ fontSize: '23px', color: 'black' }}>Dining</p>
              <p style={{ marginTop: '5px' }}>View the city's favourite dining venues</p>
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
              <p className='third_section_card_onebyone_heading'>Great Cafes </p>
              <p className='third_section_card_onebyone_subheading'>11 places <MdArrowRight style={{ fontSize: '30px' }} /></p>
            </div>
            <div className='third_section_card_onebyone card_three'>
              <p className='third_section_card_onebyone_heading'>Places for Authentic kuxhi..</p>
              <p className='third_section_card_onebyone_subheading'>5 places <MdArrowRight style={{ fontSize: '30px' }} /></p>
            </div>
            <div className='third_section_card_onebyone card_four'>
              <p className='third_section_card_onebyone_heading'> Best Luxuary Dinig Places</p>
              <p className='third_section_card_onebyone_subheading'>22 places <MdArrowRight style={{ fontSize: '30px' }} /></p>
            </div>
          </div>

        </div>
      </section>

      {/* section 4 zomato */}

      <section className='fourth_section_main'>
        <div className='fourth_section_innerdiv_main'>
          <div className='fourth_section_innerdiv_heading'>Popular localities in and around Kochi</div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone'>
            <div className='fourth_section_card_onebyone_left'>
              <p className='fourth_section_card_left_heading'>Kakanad</p>
              <p className='fourth_section_card_left_subheading'>529 places</p>
            </div>
            <div className='fourth_section_card_onebyone_right'>
              <RiArrowRightSLine style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
            </div>
          </div>

          <div className='fourth_section_card_onebyone last_fourth'>
            <p className='fourth_section_card_last'>see more  </p>
            <FaChevronDown style={{ fontSize: '20px', color: 'rgb(28, 27, 27)' }} />
          </div>
        </div>
      </section>

      {/* section 5 zomato */}
      <section className='fifth_section_main'>
        <div className='fifth_section_innerdiv_main'>
          <div className='fifth_section_innerdiv_left'>
            <img
              height={'450px'}
              width={'450px'}
              src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="poster" />
          </div>
          <div className='fifth_section_innerdiv_right'>
            <h1 style={{ fontSize: '45px', marginBottom: '3%' }}>Get the Zomato app</h1>
            <p className='fifth_section_innerdiv_right_subheading'>We will send you a link, open it on your phone to download the app</p>

            <div className='fifth_section_innerdiv_right_radiomain'>
              <div className='fifth_section_innerdiv_right_radio_input_onebyone'>
                <input type="radio" name='contact' className='fifth_section_innerdiv_right_radio_input' />
                Email
              </div>
              <div className='fifth_section_innerdiv_right_radio_input_onebyone'>
                <input type="radio" name='contact' className='fifth_section_innerdiv_right_radio_inputtwo' />
                Phone
              </div>
            </div>

            <div className='fifth_section_innerdiv_right_input_main'>
              <input type="text" placeholder='Email' className='fifth_section_innerdiv_right_input_email' />
              <button className='fifth_section_innerdiv_right_input_sharebutton'>share app link</button>
            </div>
            <p className='fifth_section_innerdiv_right_download_app'>Download app from</p>
            <div>
              <img
                height={'40px'}
                width={'160px'}
                style={{ marginRight: '10px' }}
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="" />
              <img
                height={'40px'}
                width={'160px'}
                src="	https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="" />
            </div>

          </div>


        </div>
      </section>

      {/* footer */}
      <section className='footer_section_main'>
        <div className='footer_section_innerdiv_main'>
          <img height={'40px'} width={'200px'} src="	https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
          <div className='footer_section_content'>
            <div className='footer_section_content_one'>
              <div className='footer_section_content_heading'>Eternal</div>

              <div className='footer_section_content_subheading'>Zomato</div>
              <div className='footer_section_content_subheading'>Blinkit</div>
              <div className='footer_section_content_subheading'> District</div>
              <div className='footer_section_content_subheading'>  Hyperpure</div>
              <div className='footer_section_content_subheading'> Feeding India</div>
              <div className='footer_section_content_subheading'> Investor Relations</div>



            </div>
            <div className='footer_section_content_two'>
              <div className='footer_section_content_heading'>For Restaurant</div>
              <div className='footer_section_content_subheading'>Partner With Us</div>
              <div className='footer_section_content_subheading'> Apps For You</div>

            </div>
            <div className='footer_section_content_three'>
              <div className='footer_section_content_heading'>For Restaurant</div>
              <div className='footer_section_content_subheading'>Partner With Us</div>
              <div className='footer_section_content_subheading'> Apps For You</div>
            </div>
            <div className='footer_section_content_four'>
              <div className='footer_section_content_heading'>Eternal</div>
              <div className='footer_section_content_subheading'>Zomato</div>
              <div className='footer_section_content_subheading'>Blinkit</div>
              <div className='footer_section_content_subheading'> District</div>
              <div className='footer_section_content_subheading'>  Hyperpure</div>
              <div className='footer_section_content_subheading'> Feeding India</div>
              <div className='footer_section_content_subheading'> Investor Relations</div>
            </div>
            <div className='footer_section_content_five'>
              <div className='footer_section_content_heading'>Eternal</div>
              <div>

                <TiSocialLinkedinCircular className='footer_section_icon' />
                <FaInstagram className='footer_section_icon' />
                <FaYoutube className='footer_section_icon' />
                <FaFacebookF className='footer_section_icon' />
                <FaXTwitter className='footer_section_icon' />

              </div>

              <img height={'60px'} width={'170px'} src="	https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="" />
              <img height={'60px'} width={'170px'} src=" https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="" />
            </div>
          </div>
          <div className='footer_section_line'></div>
          <div className='footer_section_last_conrent'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
            2008-2025 © Zomato™ Ltd. All rights reserved.</div>

        </div>
      </section>





    </div>
  )
}

export default app