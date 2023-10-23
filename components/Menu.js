import utilStyles from '../styles/utils.module.css'

function Menu() {
    return (
        <div>
        <div className={utilStyles.menuFrame}>
            <h2 className={utilStyles.menuText}>ABOUT</h2>
            <h2 className={utilStyles.menuText}>ESSAYS</h2>
            <h2 className={utilStyles.menuText}>BOOKS</h2>
            <h2 className={utilStyles.menuText}>CONTENT</h2>
        </div>
        </div>
    )
}

export default Menu;