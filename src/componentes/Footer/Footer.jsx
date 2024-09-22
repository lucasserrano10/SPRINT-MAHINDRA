import '../Footer/Footer.css'


function Footer(){
    return(
        <>
        <footer className="bg-dark text-light py-3">
            <div className="container text-center">
                <p className="mb-0">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
    </footer>
        </>
    )
}

export default Footer