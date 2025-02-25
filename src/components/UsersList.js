import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { List, Avatar, Text } from 'react-native-paper';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
        Users List
      </Text>
      {users.map((user) => (
        <List.Item
          key={user.id}
          title={`${user.first_name} ${user.last_name}`}
          description={user.email}
          left={(props) => <Avatar.Image {...props} source={{ uri: user.avatar }} size={50} />}
        />
      ))}
    </View>
  );
};

export default UsersList;
