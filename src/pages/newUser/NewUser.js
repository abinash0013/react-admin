import "./newUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form>
                <div className="newUserForm">
                    <div className="newUserItem">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="John0013" />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Email Id</label>
                        <input type="email" placeholder="John0013@demo.com" />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Phone</label>
                        <input type="tel" placeholder="+0 123 4567 890" />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Address</label>
                        <input
                            type="text"
                            placeholder="Near Palten Road Bomdila"
                        />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Gender</label>
                        <div className="newUserGender">
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                            />
                            <label for="male">Male</label>
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                            />
                            <label for="female">Female</label>
                            <input
                                type="radio"
                                name="gender"
                                id="other"
                                value="other"
                            />
                            <label for="other">Others</label>
                        </div>
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Active</label>
                        <select
                            name="active"
                            id="active"
                            className="newUserSelect"
                        >
                            <option value="yes">Yes</option>
                            <option value="yes">No</option>
                        </select>
                    </div>
                </div>
                <button className="newUserButton">Create user</button>
            </form>
        </div>
    );
}
