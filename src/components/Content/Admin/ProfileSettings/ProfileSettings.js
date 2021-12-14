import React from "react";
import './ProfileSettings.css';
import ContentTitle from '../../ContentTitle/ContentTitle';
import Question from './Section/Section';


export default function ProfileSettings(props){

    const sections = [{
        sectionTitle: 'Update password',
        sectionContent: 
        <form>
            Previous password: <input type="password" name="oldPw"/><br/>
            New password: <input type="password" name="newPw1"/><br/>
            New password again: <input type="password" name="newPw2"/><br/>
            <input type="submit" value="Update password"/><br/>
        </form>
        ,
        id:1
    },{
        sectionTitle: "Update email",
        sectionContent:
        <form>
        Previous e-mail: <input type="email" name="oldEmail"/><br/>
        New e-mail: <input type="email" name="newEmail"/><br/>
        <input type="submit" value="Update e-mail"/><br/>
    </form>
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