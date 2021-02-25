import React from 'react';
import styled from 'styled-components';
import kakao from '../assets/btn/btn_kakao.svg';
import cry_for_kakao from '../assets/result/pic_cry_for_kakao.png';

const { Kakao } = window;

const ShareBtn = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: none;

  margin-right:1.6rem;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
`;

function KaKao({ _title, _sub, _imageUrl, _finalType }) {

    let replaced_sub = _sub.replace('<br/>', ' ');

    let replaced_imageUrl = ''

    if (_finalType === 16) {
        replaced_imageUrl = cry_for_kakao;
    } else {
        replaced_imageUrl = _imageUrl;
    }

    const onHandleShareKaKao = () => {

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: replaced_sub + ', \'' + _title + '\'',
                description: 'find my Roomie!\n나는 어떤 유형의 룸메이트일까?',
                imageUrl: replaced_imageUrl,
                link: {
                    mobileWebUrl: 'http://localhost:3000/',
                }
            },
            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        mobileWebUrl: 'http://localhost:3000/result/' + _finalType,
                    }
                },
                {
                    title: '테스트하기',
                    link: {
                        mobileWebUrl: 'http://localhost:3000/',
                    }
                }
            ]
        });
    };

    return (
        <ShareBtn value="KaKao" onClick={onHandleShareKaKao} >
            <img src={kakao}></img>
        </ShareBtn>
    );
}

export default KaKao;