// import React from 'react'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileapi } from '../../slice/redux/profileSlice';

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profileReducer.data);
  console.log('profiledata ====>', profile);

  const userId = localStorage.getItem('userId');
  console.log('userid ====>', userId);

  useEffect(() => {
    dispatch(profileapi(userId));
  }, [dispatch, userId]);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md">
        {profile ? (
          <div className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-6"
              src={profile.image || 'https://via.placeholder.com/150'}
              alt="Profile"
            />
            <h1 className="text-2xl font-semibold text-gray-900">
              {profile.fullname}
            </h1>
            <p className="mt-2 text-gray-600">{profile.email}</p>
            <p className="mt-2 text-gray-600">{profile.phone}</p>
            <p className="mt-2 text-gray-600">{profile.city}</p>
            <p className="mt-2 text-gray-600">{profile.address}</p>
          </div>
        ) : (
          <div className="text-center text-gray-500">No profile found</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
