import React from 'react'
import styles from './NewsFlash.module.scss'
export default function NewsFlash() {
    return (
        <div className={styles.NewsFlash__container}>
            <div className={styles.NewsFlash__container_items}>
                <div className={styles.NewsFlash__items_image}>
                    <img src="/image/newsFlashImage.png" alt="" />
                    <div className={styles.NewsFlash__items_tags}>
                        <div className='tags'>ТЕГ ПРИМЕР</div>
                        <div className='tags'>СЕРВЕР</div>
                        <div className='tags'>ТЕСТ</div>
                    </div>
                    <p>09.03.2024</p>
                </div>
                <div className={styles.NewsFlash__items_text}>
                    <h1>Заголовок новости</h1>
                    <p className={styles.NewsFlash__firstPar}>Безусловно, экономическая повестка сегодняшнего дня требует анализа первоочередных требований. Кстати,  диаграммы связей могут быть призваны к ответу. А ещё ключевые особенности структуры проекта и по сей день остаются уделом либералов, которые жаждут быть своевременно верифицированы! </p>
                    <p className={styles.NewsFlash__secondPar}>А ещё тщательные исследования конкурентов заблокированы в рамках своих собственных рациональных ограничений. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом —  обнародованы. Однозначно, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Безусловно, экономическая повестка сегодняшнего дня требует анализа первоочередных требований. Кстати,  диаграммы связей могут быть призваны к ответу. А ещё ключевые особенности структуры проекта и по сей день остаются уделом либералов, которые жаждут быть своевременно верифицированы! А ещё тщательные исследования конкурентов заблокированы в рамках своих собственных рациональных ограничений. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом —  обнародованы.</p>
                    <p className={styles.NewsFlash__secondPar}>А ещё тщательные исследования конкурентов заблокированы в рамках своих собственных рациональных ограничений. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом —  обнародованы. Однозначно, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Безусловно, экономическая повестка сегодняшнего дня требует анализа первоочередных требований. Кстати,  диаграммы связей могут быть призваны к ответу. А ещё ключевые особенности структуры проекта и по сей день остаются уделом либералов, которые жаждут быть своевременно верифицированы! А ещё тщательные исследования конкурентов заблокированы в рамках своих собственных рациональных ограничений. Являясь всего лишь частью общей картины, некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом —  обнародованы.</p>
                </div>
            </div>
        </div>
    )
}
