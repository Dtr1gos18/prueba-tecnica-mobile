
import { Stack } from "expo-router";

const FoliosLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="details/[index]" />
            <Stack.Screen name="more-details/[index]" />
            <Stack.Screen name="comments/[index]" />
        </Stack>
    );
};

export default FoliosLayout;
