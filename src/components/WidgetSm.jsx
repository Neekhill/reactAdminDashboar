import { Visibility } from "@mui/icons-material";
import styled from "styled-components";
import nikhil2 from "../assets/nikhil2.jpg";

const WidgetSmContainer = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
const WidgetSmTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0px;
  list-style: none;
`;
const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const WidgetSmImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmUsername = styled.span`
  font-weight: 600;
`;
const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;
const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 5px 10px;
  background-color: #eeeef7;
  color: #555;
  border-radius: 5px;
`;
const WidgetSmIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 5px;
`;
const WidgetSm = () => {
  return (
    <WidgetSmContainer>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmListItem>
          <WidgetSmImg src={nikhil2} alt=""></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Nikhil Yadav</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <WidgetSmIcon>
              <Visibility />
            </WidgetSmIcon>
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmImg src={nikhil2} alt=""></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Nikhil Yadav</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <WidgetSmIcon>
              <Visibility />
            </WidgetSmIcon>
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmImg src={nikhil2} alt=""></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Nikhil Yadav</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <WidgetSmIcon>
              <Visibility />
            </WidgetSmIcon>
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmImg src={nikhil2} alt=""></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Nikhil Yadav</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <WidgetSmIcon>
              <Visibility />
            </WidgetSmIcon>
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmImg src={nikhil2} alt=""></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Nikhil Yadav</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <WidgetSmIcon>
              <Visibility />
            </WidgetSmIcon>
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
      </WidgetSmList>
    </WidgetSmContainer>
  );
};

export default WidgetSm;
