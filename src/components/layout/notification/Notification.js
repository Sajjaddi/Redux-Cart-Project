const Notification = ({status, message, title})=> {

    let notifClass = ''

    if(status === 'success') {
        notifClass= 'success'
    } else if(status === 'error'){
        notifClass = 'error'
    }

    return (
        <section className={`notification ${notifClass}`}>
            <p className="title">
                {title}
            </p>
            <p className="desc">
                {message}
            </p>
        </section>
    )
}

export default Notification