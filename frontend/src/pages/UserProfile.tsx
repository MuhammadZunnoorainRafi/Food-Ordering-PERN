import { useGetUser, useUpdateUser } from '../api/UserApi';
import UserProfileForm from '../components/forms/UserProfileForm';

function UserProfile() {
  const { userData, isLoading } = useGetUser();
  const { updateUser, isPending } = useUpdateUser();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(updateUser);

  if (!userData) {
    return <div>Unable to load user profile</div>;
  }

  return (
    <div>
      <UserProfileForm
        currentUser={userData}
        onSave={updateUser}
        isLoading={isPending}
      />
      PROFILE
    </div>
  );
}

export default UserProfile;
