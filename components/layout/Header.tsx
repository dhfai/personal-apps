import styled from '@/styles/module/HeaderNavigation.module.scss'

export default function HeaderNvaigation() {
    return (
        <div className={styled.headerContainer}>
            <h1 className={styled.logo}>dhf.ai</h1>
            <span>
                English
            </span>
        </div>
    )
}