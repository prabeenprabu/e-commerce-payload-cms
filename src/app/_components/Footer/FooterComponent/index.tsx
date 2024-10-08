import React from 'react'
import { Footer } from '../../../../payload/payload-types'

import classes from './index.module.scss'
import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import Image from 'next/image'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ' '}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion) => {
            return (
              <li key={inclusion.title}>
                <Image src={inclusion.icon} alt={inclusion.icon} width={36} height={36} className={classes.icon}/>
                <h5 className={classes.title}>{inclusion.title}</h5>
                <p className={classes.description}>{inclusion.description}</p>
              </li>
            )
          })}
        </ul>
      </Gutter>
    
          <div className={classes.footer}></div>
    </footer>
  )
}

export default FooterComponent
