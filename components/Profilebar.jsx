import React from 'react'
import Image from 'next/image'
import Profile from '../assets/Image4.png'

const Profilebar = () => {
  return (
    <div className='flex shrink-0 md:hidden overflow-y-auto h-90vh sticky top-10vh w-fit border-2 flex-col items-center'>
      <div className="icons  w-full px-2 flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" className='' width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14.5C16.0627 14.5 17.7333 12.8293 17.7333 10.7667C17.7333 8.70399 16.0627 7.03333 14 7.03333C11.9373 7.03333 10.2667 8.70399 10.2667 10.7667C10.2667 12.8293 11.9373 14.5 14 14.5ZM14 16.3667C11.508 16.3667 6.53333 17.6173 6.53333 20.1V21.0333C6.53333 21.5467 6.95333 21.9667 7.46666 21.9667H20.5333C21.0467 21.9667 21.4667 21.5467 21.4667 21.0333V20.1C21.4667 17.6173 16.492 16.3667 14 16.3667Z" fill="#C3CAD9"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.39999 12.6333C7.37333 12.6333 6.53333 13.4733 6.53333 14.5C6.53333 15.5267 7.37333 16.3667 8.39999 16.3667C9.42666 16.3667 10.2667 15.5267 10.2667 14.5C10.2667 13.4733 9.42666 12.6333 8.39999 12.6333ZM19.6 12.6333C18.5733 12.6333 17.7333 13.4733 17.7333 14.5C17.7333 15.5267 18.5733 16.3667 19.6 16.3667C20.6267 16.3667 21.4667 15.5267 21.4667 14.5C21.4667 13.4733 20.6267 12.6333 19.6 12.6333ZM14 12.6333C12.9733 12.6333 12.1333 13.4733 12.1333 14.5C12.1333 15.5267 12.9733 16.3667 14 16.3667C15.0267 16.3667 15.8667 15.5267 15.8667 14.5C15.8667 13.4733 15.0267 12.6333 14 12.6333Z" fill="#C3CAD9"/>
        </svg>
      </div>
      <div className="profile-img after:content-['2'] after:absolute after:left-[80%] after:bg-[#3361FF] after:rounded-full after:h-6 after:w-6 after:text-[#FFFFFF] after:flex after:text-[10px] after:justify-center after:items-center after:bottom-1/3 w-fit h-fit rounded-full p-1 relative">
        <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 132 133" fill="none">
          <path d="M66 1.5C30.1015 1.5 1 30.6015 1 66.5C1 102.399 30.1015 131.5 66 131.5V131.5C101.899 131.5 131 102.399 131 66.5" stroke="#3361FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <Image
        className="relative left-0.5 top-0.5 rounded-full bg-[#FFCB3366] overflow-hidden"
            src={Profile}
            width={70}
            height={75}
        />
      </div>
      <div className=' text-sm mt-4 font-bold text-[#6B7A99]'>Hello Alfred Bryant</div>
      <p className='text-[#ADB8CC] m-2 text-xs font-normal'>adrain.nader@yahoo.com</p>
      <div className='grid m-6 bg-[#EDEFF2] grid-cols-2 border-2 rounded-lg'>
        <div className='py-6 px-6 flex flex-col border-2 justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 16.5H13C13.55 16.5 14 16.05 14 15.5V7.5C14 6.95 13.55 6.5 13 6.5H7C6.45 6.5 6 6.95 6 7.5V15.5C6 16.05 6.45 16.5 7 16.5ZM7 24.5H13C13.55 24.5 14 24.05 14 23.5V19.5C14 18.95 13.55 18.5 13 18.5H7C6.45 18.5 6 18.95 6 19.5V23.5C6 24.05 6.45 24.5 7 24.5ZM17 24.5H23C23.55 24.5 24 24.05 24 23.5V15.5C24 14.95 23.55 14.5 23 14.5H17C16.45 14.5 16 14.95 16 15.5V23.5C16 24.05 16.45 24.5 17 24.5ZM16 7.5V11.5C16 12.05 16.45 12.5 17 12.5H23C23.55 12.5 24 12.05 24 11.5V7.5C24 6.95 23.55 6.5 23 6.5H17C16.45 6.5 16 6.95 16 7.5Z" fill="#C3CAD9"/>
          </svg>
          <p className='text-xs text-[##ADB8CC]'>Dashboard</p>
        </div>
        <div className='p-8 bg-white scale-110 relative rounded-lg flex flex-col justify-center items-center'>
          <svg className='absolute top-4 right-6' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <rect x="11" y="12.5" width="7" height="7" rx="3.5" fill="#3361FF"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z" fill="#3361FF"/>
          </svg>
          <p className='text-xs text-[##ADB8CC]'>Notes</p>
        </div>
        <div className='p-6 flex border-2 flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z" fill="#C3CAD9"/>
          </svg>
          <p className='text-xs border-2 text-[##ADB8CC]'>Tasks</p>
        </div>
        <div className='p-6 flex border-2 flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.35 13.54C21.67 10.09 18.64 7.5 15 7.5C12.11 7.5 9.6 9.14 8.35 11.54C5.34 11.86 3 14.41 3 17.5C3 20.81 5.69 23.5 9 23.5H22C24.76 23.5 27 21.26 27 18.5C27 15.86 24.95 13.72 22.35 13.54Z" fill="#C3CAD9"/>
          </svg>
          <p className='text-xs text-[##ADB8CC]'>Files</p>
        </div>
        <div className='p-6 flex border-2 flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 7.5H7C5.9 7.5 5.01 8.4 5.01 9.5L5 21.5C5 22.6 5.9 23.5 7 23.5H23C24.1 23.5 25 22.6 25 21.5V9.5C25 8.4 24.1 7.5 23 7.5ZM22.6 11.75L15.53 16.17C15.21 16.37 14.79 16.37 14.47 16.17L7.4 11.75C7.15 11.59 7 11.32 7 11.03C7 10.36 7.73 9.96 8.3 10.31L15 14.5L21.7 10.31C22.27 9.96 23 10.36 23 11.03C23 11.32 22.85 11.59 22.6 11.75Z" fill="#C3CAD9"/>
          </svg>
          <p className='text-xs text-[##ADB8CC]'>Emails</p>
        </div>
        <div className='p-6 flex border-2 flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 14.5C20.66 14.5 21.99 13.16 21.99 11.5C21.99 9.84 20.66 8.5 19 8.5C17.34 8.5 16 9.84 16 11.5C16 13.16 17.34 14.5 19 14.5ZM11 14.5C12.66 14.5 13.99 13.16 13.99 11.5C13.99 9.84 12.66 8.5 11 8.5C9.34 8.5 8 9.84 8 11.5C8 13.16 9.34 14.5 11 14.5ZM11 16.5C8.67 16.5 4 17.67 4 20V21.5C4 22.05 4.45 22.5 5 22.5H17C17.55 22.5 18 22.05 18 21.5V20C18 17.67 13.33 16.5 11 16.5ZM19 16.5C18.71 16.5 18.38 16.52 18.03 16.55C18.05 16.56 18.06 16.58 18.07 16.59C19.21 17.42 20 18.53 20 20V21.5C20 21.85 19.93 22.19 19.82 22.5H25C25.55 22.5 26 22.05 26 21.5V20C26 17.67 21.33 16.5 19 16.5Z" fill="#C3CAD9"/>
          </svg>
          <p className='text-xs text-[##ADB8CC]'>Clients</p>
        </div>
        <div className='p-6 flex border-2 flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 16.5H16C15.45 16.5 15 16.95 15 17.5V20.5C15 21.05 15.45 21.5 16 21.5H19C19.55 21.5 20 21.05 20 20.5V17.5C20 16.95 19.55 16.5 19 16.5ZM19 6.5V7.5H11V6.5C11 5.95 10.55 5.5 10 5.5C9.45 5.5 9 5.95 9 6.5V7.5H8C6.89 7.5 6.01 8.4 6.01 9.5L6 23.5C6 24.6 6.89 25.5 8 25.5H22C23.1 25.5 24 24.6 24 23.5V9.5C24 8.4 23.1 7.5 22 7.5H21V6.5C21 5.95 20.55 5.5 20 5.5C19.45 5.5 19 5.95 19 6.5ZM21 23.5H9C8.45 23.5 8 23.05 8 22.5V12.5H22V22.5C22 23.05 21.55 23.5 21 23.5Z" fill="#C3CAD9"/>
          </svg>
          <p className='text-xs text-[##ADB8CC]'>Calendars</p>
        </div>
        <div className='p-6 flex border-2 flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0888 6.39628C13.0788 4.38628 10.0688 3.97628 7.64878 5.15628L11.2788 8.78628C11.6688 9.17628 11.6688 9.80628 11.2788 10.1963L9.68878 11.7863C9.29878 12.1863 8.66878 12.1863 8.27878 11.7863L4.64878 8.15628C3.47878 10.5863 3.88878 13.5763 5.89878 15.5863C7.75878 17.4463 10.4788 17.9363 12.7888 17.0663L20.7488 25.0263C21.7788 26.0563 23.4388 26.0563 24.4588 25.0263C25.4888 23.9963 25.4888 22.3363 24.4588 21.3163L16.5388 13.3863C17.4588 11.0463 16.9788 8.28628 15.0888 6.39628Z" fill="#C3CAD9"/>
          </svg>
          <p className='text-xs text-[##ADB8CC]'>Settings</p>
        </div>
        
      </div>
      <div className="icons my-4 border-2 rounded-full flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2037 18.75L19.6637 18.46C19.0537 18.39 18.4537 18.6 18.0237 19.03L16.1837 20.87C13.3537 19.43 11.0337 17.12 9.59367 14.28L11.4437 12.43C11.8737 12 12.0837 11.4 12.0137 10.79L11.7237 8.27C11.6037 7.26 10.7537 6.5 9.73367 6.5H8.00367C6.87367 6.5 5.93367 7.44 6.00367 8.57C6.53367 17.11 13.3637 23.93 21.8937 24.46C23.0237 24.53 23.9637 23.59 23.9637 22.46V20.73C23.9737 19.72 23.2137 18.87 22.2037 18.75Z" fill="#FF6633"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23 7.5H7C5.9 7.5 5 8.4 5 9.5V21.5C5 22.6 5.9 23.5 7 23.5H23C24.1 23.5 25 22.6 25 21.5V9.5C25 8.4 24.1 7.5 23 7.5ZM22.6 11.75L16.06 15.84C15.41 16.25 14.59 16.25 13.94 15.84L7.4 11.75C7.15 11.59 7 11.32 7 11.03C7 10.36 7.73 9.96 8.3 10.31L15 14.5L21.7 10.31C22.27 9.96 23 10.36 23 11.03C23 11.32 22.85 11.59 22.6 11.75Z" fill="#29CC39"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 7.5H6C4.9 7.5 4 8.4 4 9.5V22.5C4 23.6 4.9 24.5 6 24.5H24C25.1 24.5 26 23.6 26 22.5V9.5C26 8.4 25.1 7.5 24 7.5ZM24 21.5C24 22.05 23.55 22.5 23 22.5H15V9.5H23C23.55 9.5 24 9.95 24 10.5V21.5ZM22.25 13H16.75C16.34 13 16 13.34 16 13.75C16 14.16 16.34 14.5 16.75 14.5H22.25C22.66 14.5 23 14.16 23 13.75C23 13.34 22.66 13 22.25 13ZM22.25 15.5H16.75C16.34 15.5 16 15.84 16 16.25C16 16.66 16.34 17 16.75 17H22.25C22.66 17 23 16.66 23 16.25C23 15.84 22.66 15.5 22.25 15.5ZM22.25 18H16.75C16.34 18 16 18.34 16 18.75C16 19.16 16.34 19.5 16.75 19.5H22.25C22.66 19.5 23 19.16 23 18.75C23 18.34 22.66 18 22.25 18Z" fill="#8833FF"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 18.55L18.55 23.0125C19.2375 23.3875 19.7375 23.2 19.9125 22.375L22.375 10.775C22.625 9.76249 21.9875 9.31249 21.325 9.61249L6.87498 15.1875C5.88748 15.5875 5.89998 16.1375 6.69998 16.375L10.4125 17.5375L19 12.125C19.4 11.875 19.775 12.0125 19.475 12.2875L12.5 18.55Z" fill="#33BFFF"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9971 5.5C9.48427 5.5 5 9.98427 5 15.4971C5 17.6834 5.70528 19.711 6.90418 21.3568L5.65817 25.0711L9.50185 23.843C11.0828 24.8891 12.9693 25.4944 15.0029 25.4944C20.5157 25.4944 25 21.0099 25 15.4973C25 9.98444 20.5157 5.50017 15.0029 5.50017H14.9971V5.5ZM12.2054 10.5781C12.0115 10.1138 11.8645 10.0962 11.5707 10.0843C11.4592 10.0771 11.3475 10.0732 11.2357 10.0727C10.8535 10.0727 10.4539 10.1843 10.2129 10.4311C9.91918 10.7308 9.19035 11.4302 9.19035 12.8643C9.19035 14.2984 10.2365 15.6854 10.3775 15.8794C10.5244 16.0732 12.417 19.0588 15.3555 20.2756C17.6535 21.2277 18.3354 21.1395 18.8584 21.0278C19.6224 20.8633 20.5804 20.2988 20.8214 19.6173C21.0624 18.9354 21.0624 18.3535 20.9918 18.2301C20.9213 18.1067 20.7272 18.0364 20.4335 17.8893C20.1397 17.7423 18.7114 17.037 18.441 16.943C18.1765 16.8431 17.9239 16.8785 17.7242 17.1606C17.442 17.5544 17.1658 17.9541 16.9424 18.195C16.7661 18.3831 16.478 18.4066 16.2371 18.3066C15.9139 18.1716 15.0089 17.8539 13.8921 16.8607C13.0281 16.0909 12.4404 15.133 12.27 14.8451C12.0995 14.5513 12.2525 14.3806 12.3875 14.2221C12.5344 14.0398 12.6754 13.9106 12.8224 13.74C12.9693 13.5697 13.0516 13.4815 13.1457 13.2816C13.2457 13.0877 13.175 12.8878 13.1045 12.7408C13.034 12.5939 12.4464 11.1598 12.2054 10.5781Z" fill="#29CC39"/>
        </svg>
      </div>
    </div>
  )
}

export default Profilebar
