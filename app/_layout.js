import { Stack } from 'expo-router';
export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "Mad Libs",
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: 'white',
            headerBackVisible: true,
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="hallpass"
                options={{
                    headerShown: true
                }}
            />
        </Stack>
    );
}