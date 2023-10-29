import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

function Menu() {
    return (
        <div>
        <div className={utilStyles.menuFrame}>
            <h2 className={utilStyles.menuText}><Link href="/about">ABOUT</Link></h2>
            <h2 className={utilStyles.menuText}><Link href="/">ESSAYS</Link></h2>
            <h2 className={utilStyles.menuText}><Link href="/library">BOOKS</Link></h2>
            <h2 className={utilStyles.menuText}><Link href="/contact">CONTACT</Link></h2>
        </div>
        </div>
    )
}

export default Menu;