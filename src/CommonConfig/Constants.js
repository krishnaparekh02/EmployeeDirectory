import { Platform } from 'react-native';

export default {
    IS_TESTDATA: '1',
    PLACEHOLDER_PROFILE: '',
    USER_AGENT: Platform.OS == 'android' ? 'Android' : 'iOS',
    DEVICE_TYPE: Platform.OS == 'android' ? 1 : 0,
    LINK_TERMS_AND_CONDITION: '',
    LINK_PRIVACY_POLICY: '',
    activeOpacity: 0.7,
    IS_ANDROID: Platform.OS == 'android',
    LOAD_MORE_LIMIT: {
        DEFAULT: 10,
    },
    BASE_URL: '',
    NoData: 'No Data Found!'
};
