import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center h-20'>
      <div className='bg-white rounded-full p-2'>
        <svg
            viewBox="0 0 512 512"
            fill="#C3CAD9"
            color='#C3CAD9'
            height="30px"
            width="30px"
            >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M80 160h352M80 256h352M80 352h352"
            />
        </svg>
      </div>
      <div className='border-2 text-lg text-[#4D5E80] font-bold'>Constructor</div>
      <ul className='border-2 inline-block list-none text-[#7D8FB3] text-menu font-bold'>
        <li className='inline-block mx-1'>Dashboard</li>
        <li className='inline-block mx-1'>About Us</li>
        <li className='inline-block mx-1'>News</li>
        <li className='inline-block mx-1'>User Policy</li>
        <li className='inline-block mx-1'>Contacts</li>
        <li className='inline-block mx-1 '>
          <svg className='inline-block' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Navigation/more_horiz">
            <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9"/>
            </g>
          </svg>
        </li>
      </ul>
      <div className='flex px-1 text-xs items-center font-bold h-12 bg-white rounded-3xl w-1/4'>
        <svg className='inline-block' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Icon">
          <path id="Icon_2" fill-rule="evenodd" clip-rule="evenodd" d="M18.5006 17.5006H17.7106L17.4306 17.2306C18.6306 15.8306 19.2506 13.9206 18.9106 11.8906C18.4406 9.11063 16.1206 6.89063 13.3206 6.55063C9.09063 6.03063 5.53063 9.59063 6.05063 13.8206C6.39063 16.6206 8.61063 18.9406 11.3906 19.4106C13.4206 19.7506 15.3306 19.1306 16.7306 17.9306L17.0006 18.2106V19.0006L21.2506 23.2506C21.6606 23.6606 22.3306 23.6606 22.7406 23.2506C23.1506 22.8406 23.1506 22.1706 22.7406 21.7606L18.5006 17.5006ZM12.5006 17.5006C10.0106 17.5006 8.00063 15.4906 8.00063 13.0006C8.00063 10.5106 10.0106 8.50063 12.5006 8.50063C14.9906 8.50063 17.0006 10.5106 17.0006 13.0006C17.0006 15.4906 14.9906 17.5006 12.5006 17.5006Z" fill="#C3CAD9"/>
          </g>
        </svg>

        <input type="text"  name="search" id="search" placeholder='Search Products, Orders and Clients'/>
        <svg className='right-auto' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon">
            <path id="Icon_2" fill-rule="evenodd" clip-rule="evenodd" d="M12.2925 18.9625L16.1725 15.0825L12.2925 11.2025C12.1052 11.0157 12 10.762 12 10.4975C12 10.233 12.1052 9.97933 12.2925 9.7925C12.6825 9.4025 13.3125 9.4025 13.7025 9.7925L18.2925 14.3825C18.6825 14.7725 18.6825 15.4025 18.2925 15.7925L13.7025 20.3825C13.3125 20.7725 12.6825 20.7725 12.2925 20.3825C11.9125 19.9925 11.9025 19.3525 12.2925 18.9625Z" fill="#C3CAD9"/>
            </g>
        </svg>

      
      </div>

    </div>
  )
}

export default Navbar
