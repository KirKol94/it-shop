import { borders, bp, colors, fonts } from '@/styled/vars'

import BoostyIcon from '@/assets/svg/boosty.svg'
import { InputText } from '@root/RootInput'
import InstagramIcon from '@/assets/svg/instagram.svg'
import { RootButton } from '@root/RootButton'
import { RootContainer } from '@root/RootContainer'
import TwitterIcon from '@/assets/svg/twitter.svg'
import VkIcon from '@/assets/svg/vk.svg'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: ${borders.delimeter};
  padding: 80px 0;
  background-color: ${colors.violet};
  color: ${colors.white};
`

export const Container = styled(RootContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  ${bp.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLogoBox = styled.div`
  margin-bottom: 24px;
`

export const Button = styled(RootButton)`
  width: 100%;
  margin-bottom: 14px;
  color: ${colors.white};
`

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
  gap: 24px;
`

export const AddressText = styled.p`
  font-family: ${fonts.exo};
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  ${bp.md} {
    text-align: center;
  }
`

export const Subtitle = styled.p<{ mod: 'nav' | 'social' }>`
  font-family: ${fonts.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: ${({ mod }) => (mod === 'nav' ? '8px' : '14px')};
`

export const NewsLetter = styled.div`
  max-width: 280px;
`

export const NewsLetterTitle = styled.p`
  margin-bottom: 14px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

export const InputTextFooter = styled(InputText)`
  border: 1px solid ${colors.gray};
  background-color: transparent;
`

export const Socials = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

export const SocialsIcon = styled.span<{ icon: string }>`
  position: relative;
  padding: 6px 16px;
  border-radius: 50%;
  background: linear-gradient(91.06deg, ${colors.neon} 0%, #6f5b39 100%);
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.25);

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    transform: translate(-50%, -50%);
    background-image: ${({ icon }) =>
      icon === 'vk'
        ? `url(${VkIcon})`
        : icon === 'boosty'
        ? `url(${BoostyIcon})`
        : icon === 'instagram'
        ? `url(${InstagramIcon})`
        : icon === 'twitter'
        ? `url(${TwitterIcon})`
        : 'none'};

`

export const Privacy = styled.p`
  color: ${colors.gray};
  font-family: ${fonts.exo};
  font-size: 10px;
  font-weight: 400;
  text-align: center;

  & > a {
    color: ${colors.neon};
    text-decoration-line: underline;
  }
`
