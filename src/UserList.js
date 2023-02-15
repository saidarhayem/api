const UserList = ({ user }) => {
    return (
        <div className="App">
            < div className="container" >
            {user.map((el) =>

                
                    <div className="card">
                        <img src="https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg" alt="Person" class="card__image" />
                        <div className="card__name">
                            <h6>{el.name}</h6>
                            <h6>{el.username}</h6>
                        </div>
                       

                    </div>
                 )}
            </div>
        </div>
    )



}

export default UserList




