import React from 'react'
import './App.scss'

function app() {
  return (
    <div>
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
              <p className='line'>|</p>

              <input type="text" placeholder='search for restaurant , cuisine or a dish' className='first_section_middle_search'/>
            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default app