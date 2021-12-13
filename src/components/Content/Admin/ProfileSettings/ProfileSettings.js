import React from "react";
import './ProfileSettings.css';
import ContentTitle from '../../ContentTitle/ContentTitle';
import Question from './Section/Section';


export default function ProfileSettings(props){

    const sections = [{
        sectionTitle: 'Update password',
        sectionContent: 
        <form>
            Old password: <input type="password" name="oldPw"/><br/>
            New password: <input type="password" name="newPw1"/><br/>
            New password again: <input type="password" name="newPw2"/><br/>
        </form>
        ,
        id:1
    },{
        sectionTitle: "Update email",
        sectionContent: "Old email, new email", 
        id:2
    },{
        sectionTitle: "Light/dark theme",
        sectionContent: <button>Switch theme</button>, 
        id: 3
    }]


    return(
        <div className="ProfileSettings">
            <ContentTitle
                onChange={props.onChange}
                title='Profile settings'
            />
            {
                sections.map(x =>{
                    return <Question title={x.sectionTitle} content={x.sectionContent} id={x.id}></Question>
                })
            }
        </div>
    )

}