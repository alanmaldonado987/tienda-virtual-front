import '../styles/Footer.scss';

export default function Footer() {
  return (
    <footer>
        <div className='contact'>
            <div className='contact_tittle'>
                <p>Contactanos!</p>
            </div>
            <div className='contact_contact'>
                <p>Cell: +57 xxx-xxx-xxxx </p>
                <p>Email: storecarvajal@carvajal.com</p>
                <p>Direccion: xxxxxxxxxxx</p>
            </div>
            
        </div>
        <div className='follow'>
                <div className='follow_p'>
                    Siguenos
                </div>
                <div className='follow_icons'>
                    <div className='row'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div className='row'>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                </div>
        </div>
        <div className='service'>
                <p> Pronto se habilitaran mas servicios </p>
        </div>
        <div className='developers'>
            <div className='developer'>
                Desarrollado Por
                Alan Maldonado
            </div>
            <div className='supervisor'>
                Supervisado por Sebastian Leon
            </div>
        </div>
    </footer>
  )
}
