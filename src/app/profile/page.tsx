import ProfilePersonalProjects from "../components/profile/ProfilePersonalProjects";
import ProfilePersonInfo from "../components/profile/ProfilePersonInfo";
import ProfileProjects from "../components/profile/ProfileProjects";

export default function Page() {
    return (
        <div>
            <ProfilePersonInfo />
            <ProfileProjects />
            <ProfilePersonalProjects />
        </div>
    )
}