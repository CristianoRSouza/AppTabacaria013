import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        backgroundColor: '#1E1E1E',
        color: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        width: '100%',
        backgroundColor: '#00A86B',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    disabledButton: {
        backgroundColor: '#006B4F',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    containerPai: {
      flex: 1,
      backgroundColor: '#0c0a0a'
    },
});
