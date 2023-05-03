import React, {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import './groups.css';
import {BsThreeDotsVertical, BsFillLightningFill} from "react-icons/bs";


const Groups = () => {

const [isShown, setIsShown] = useState(false);


    const handleClick = event => {
        setIsShown(current => !current);
    
    };

    

    

    




    return(
        <div className='groups_container'>
             <div className='groups_navbar'>
                <p className='profile_button'><Link to="/account">Profile</Link></p>
                <p className='logout_button'><Link to="/home">Logout</Link></p>
            </div>

           
            
            <div className='groups_header'>
                <h1>Usergroups</h1>
                <input type="search" placeholder='Search Usergroups'/>
            </div>

            <div className='groups_subheader'>
                <h3>My Groups</h3>
                <button onClick={handleClick}>+ Create New Group</button>
            
            </div>


            

            <div className='groups_content'>
           
            <div className='groups_boxes'>
            <div className='create-new-group' style={{display: isShown ? 'flex' : 'none'}}>
                <form action="">
                <div className='create-new-group-title'>
                    <h3>Create New User Group</h3>
                </div>
                
                
                <div className="usergroup_name">
                    <p>Name of group</p>
                    <div className='usergroup_name_buttons'>
                    <input type="name" placeholder='Enter name of user group' />
                    <button>Save</button>
                    </div>
                    
                </div>
                
                <div className='usergroup_email'>
                    <p>Email</p>
                    <div className='usergroup_email_buttons'>
                    <input type="email" placeholder='johndoe@gmail.com'/>
                    <button>Send Invite</button>
                    </div>
                    
                </div>
                <div className='usergroup_participants'>
                    <h4>Participants</h4>
                    <p>Talan Oates</p>
                    <p>Oliver Robert</p>
                
                </div>
                <div className='usergroup_invite-link'>
                    <button className='generate_input'>Generate invite link</button>
                    <button className='generate_button'>Generate</button>
                </div>
                <div className='usergroup_save-cancel'>
                    <button className='save_button'>Save</button>
                    <button className='cancel_button' onClick={handleClick}>Cancel</button>
                </div>
                    
                </form>
                
            </div> 



                <div className='new_group'>
                    <div className='new_group-content'>
                        <h3>Usergroup 1</h3>
                        <div className='group_icon'></div>
                    </div>
                </div>
                
                <div className='new_group'>
                 
                        <BsThreeDotsVertical color="#110101" size={27}/>
                    
                </div>
                <div className='new_group'>
                <div className='new_group-content'>
                        <h3>Usergroup 2</h3>
                        <div className='group_icon'></div>
                    </div>
                </div>
            </div>
            <div className='groups_boxes'>
                <div className='new_group'>
                <div className='new_group-content'>
                        <h3>Usergroup 3</h3>
                        <div className='group_icon'></div>
                    </div>
                </div>
                <div className='new_group'>
                <div className='new_group-content'>
                        <h3>Usergroup 4</h3>
                        <div className='group_icon'></div>
                    </div>
                </div>
                <div className='new_group'>
                  
                </div>

            </div>
            </div>
            
         

        </div>
    )
}

export default Groups;