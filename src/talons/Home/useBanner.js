import { useQuery } from '@apollo/client';
import { getSlider } from './Home.gql';

export const useBanner = () => {
    const {
        data: bannerData,
        loading: bannerLoading,
        error: bannerError
    } = useQuery(getSlider, {
        variables: {
            input: { title: 'Client App Homepage Slider' }
        }
    });

    return {
        bannerData,
        bannerLoading,
        bannerError
    };
};
