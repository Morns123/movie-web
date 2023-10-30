'use client'

import { Footer } from 'flowbite-react'
import Image from 'next/image'
import applestore from '@/assets/applestore.svg'
import googleplay from '@/assets/googleplay.svg'
import face from '@/assets/face.svg'
import pinterest from '@/assets/pinterest.svg'
import instagram from '@/assets/instagram.svg'
import logo from '@/assets/logo.svg'

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className='bg-black'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Image src={logo} width={100} height={100}/>
            <br />
            <p style={{ color:'white' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Sequi a minima neque! Saepe repudiandae optio dolore, <br/> adipisci asperiores obcaecati temporibus aperiam est, <br/> nemo laboriosam recusandae minus. Laboriosam ipsa autem error.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-1">
            <div>
              <Footer.Title title="Tentang Kami"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Blog
                </Footer.Link>
                <Footer.Link href="#">
                  Layanan
                </Footer.Link>
                <Footer.Link href="#">
                  Karir
                </Footer.Link>
                <Footer.Link href="#">
                  Pusat Media
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Download" className='m-'/>
              <Footer.LinkGroup row>
                <Footer.Link href="#">
                <Image src={googleplay} width={150} height={150}/>
                </Footer.Link>
                <Footer.Link href="#">
                <Image src={applestore} width={150} height={150}/>
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.Title title="Social Media" className='m-'/>
              <Footer.LinkGroup row>
                <Footer.Link href="#">
                <Image src={face} width={50} height={50}/>
                </Footer.Link>
                <Footer.Link href="#">
                <Image src={pinterest} width={60} height={60}/>
                </Footer.Link>
                <Footer.Link href="#">
                <Image src={instagram} width={60} height={60}/>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright
        by=". All Rights Reserved"
        href="#"
        year={2023}
        />
      </div>
    </Footer>
  )
}


