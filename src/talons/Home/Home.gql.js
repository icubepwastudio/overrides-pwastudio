import { gql } from '@apollo/client';

export const getSlider = gql`
    query getSlider($input: InputSlider) {
        slider(input: $input) {
            slider_id
            images {
                image_id
                image_url
                thumb_image_url
                mobile_image_url
                url_redirection
            }
        }
    }
`;
