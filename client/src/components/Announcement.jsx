import styled from 'styled-components';

const Component = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Component>
            Super Deal! Free Shipping On Orders Over $50
        </Component>
    )
}

export default Announcement;
