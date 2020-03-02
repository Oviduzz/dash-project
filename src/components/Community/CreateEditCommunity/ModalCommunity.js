import React, {Component} from 'react';
import {Modal} from "antd";
import ModalBody from "./ModalBody";
import modalImage from "../../../assets/Images/modalImage.png";

class ModalCommunity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {
        title: '2019 Japan Task Force - By Zheng Hao (Andy) Chen',
        academyName: 'Knovva Academy',
        postDate: 'January 14th 2020, 10:22 AM',
        favorites: {
          likes: 22,
          messages: 2,
          views: 54
        },
        postImage: modalImage,
        text: {
          first: 'I was given the opportunity to attend the Knovva mG20 Japan Taskforce from the 21st of May to the 1st of\n' +
            '              June. If I had to sum it up in one sentence, I would say that it has been one of the best experiences of my\n' +
            '              life so far. There is no other opportunity like this taskforce: this is the only chance that high schoolers\n' +
            '              are able to make a distinctive impact on the world stage. Not only that, but I was also able to create\n' +
            '              friendships and lifelong connections with the 19 others that were alongside me on this trip.',
          second: 'I was given the opportunity to attend the Knovva mG20 Japan Taskforce from the 21st of May to the 1st of\n' +
            '              June. If I had to sum it up in one sentence, I would say that it has been one of the best experiences of my\n' +
            '              life so far. There is no other opportunity like this taskforce: this is the only chance that high schoolers\n' +
            '              are able to make a distinctive impact on the world stage. Not only that, but I was also able to create\n' +
            '              friendships and lifelong connections with the 19 others that were alongside me on this trip.',
          third: 'I learned so much from not just my friends at Knovva, but also from the Y20 and Girls20 Delegates. The\n' +
            '              insights from Yasushi Maruyama (from Egon Zehnder) at the Y20 workshops, and his messages about leadership,\n' +
            '              success, and the future of jobs as well as others’ insights will stay with me through high school,\n' +
            '              university,\n' +
            '              and beyond. Furthermore, each and every one of the delegates that I connected with had proposals that they\n' +
            '              were passionate about, that they genuinely believed could change the world with, and it was inspiring to see\n' +
            '              this when countries voted for and discussed policy recommendations. From ESG reporting requirements for\n' +
            '              countries to regulations and recruiting and retention of women in the workplace, each recommendation was\n' +
            '              extremely well thought.',

        },
        comments: [
          {
            id: 1,
            favorites: {
              likes: 2,
              comments: 2,
            },
            author: 'Burak Can Ozen',
            content: 'On the silk road, all of the people have responsibilities but according to my opinion, the princess has the biggest responsibilities. They are the prevent the war between the two sides. I believe that marrying other countries\' kings even if they don’t like him is a really big sacrifice and they are making this sacrifice for their country and people. They are leaving their family and country. They are going to involve a new family and a new country. At first, they probably won’t feel good because of these reasons but they find solace with thinking they prevent wars. I have some concerns about princess opinions about their husbands. They can’t choose their husband because of the system. Sometimes they are marrying a man who is not a good husband. So some of the princesses are happy with their marriage but some are not and if someone gets married to people who don’t love them they can’t be happy in their daily life. But even if they are not happy, they look at this marriage as a duty. If their husband dies or if their husband loses his authority, they will fail and come back to their country. This is a really big responsibility for them. So being the princess of the country is not as good as it looks.',
            postedOn: 6
          },
          {
            id: 2,
            favorites: {
              likes: 2,
              comments: 2,
            },
            author: 'Burak Can Ozen',
            content: 'On the silk road, all of the people have responsibilities but according to my opinion, the princess has the biggest responsibilities. They are the prevent the war between the two sides. I believe that marrying other countries\' kings even if they don’t like him is a really big sacrifice and they are making this sacrifice for their country and people. They are leaving their family and country. They are going to involve a new family and a new country. At first, they probably won’t feel good because of these reasons but they find solace with thinking they prevent wars. I have some concerns about princess opinions about their husbands. They can’t choose their husband because of the system. Sometimes they are marrying a man who is not a good husband. So some of the princesses are happy with their marriage but some are not and if someone gets married to people who don’t love them they can’t be happy in their daily life. But even if they are not happy, they look at this marriage as a duty. If their husband dies or if their husband loses his authority, they will fail and come back to their country. This is a really big responsibility for them. So being the princess of the country is not as good as it looks.',
            postedOn: 6
          },
        ],
      }
    }
  }

  componentDidMount() {
    // update state according to data from modal
  }

  render() {
    return (
      <div>
        <Modal
          width={800}
          title="Basic Modal"
          visible={this.props.visible}
          onCancel={this.props.onCancel}
          closable={false}
          footer={null}
          wrapClassName='modalCommunity'
        >
          <ModalBody {...this.state.postData}/>
        </Modal>
      </div>
    );
  }
}

export default ModalCommunity;
