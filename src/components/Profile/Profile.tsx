import './profile.css';

import ProfileDescription from '../ProfileDescription/ProfileDescription';
import Layout from '../Layout/Layout';

type PropsType = {
    description: string,
    updateSellerDescription: () => void
}

const Profile: React.FC<PropsType> = ({ description, updateSellerDescription }) => (
    <Layout header='Profile' classPage='profile'>
        seller description
        <div className="profile__cover">
            cover
        </div>
        <div className="content_wrapper">
            <div className="profile__about-block">
                <div className="profile__icon">
                    icon
                </div>
                <div className="profile__address">
                    My Address
                </div>
                <ProfileDescription description = { description } updateSellerDescription = { updateSellerDescription } />
            </div>
        </div>
    </Layout>
)

export default Profile;