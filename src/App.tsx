import {
  Bell,
  Building2,
  CalendarDays,
  ChevronRight,
  Heart,
  Home,
  House,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
  UserRound,
} from 'lucide-react'

type Listing = {
  type: string
  price: string
  details: string
  address: string
  image: string
  tag: string
}

const categories = [
  { label: 'Купить', icon: House },
  { label: 'Снять', icon: CalendarDays },
  { label: 'Новостройки', icon: Building2 },
  { label: 'Посуточно', icon: Sparkles },
  { label: 'Коммерческая', icon: Building2 },
]

const searchJobs = [
  { title: 'Купить для жизни', description: 'Квартира или дом' },
  { title: 'Снять надолго', description: 'Без лишних звонков' },
  { title: 'Инвестировать', description: 'Доходные проекты' },
]

const listings: Listing[] = [
  {
    type: '2-комн. квартира',
    price: '19,8 млн ₽',
    details: '54 м² · 11/24 этаж',
    address: 'Москва, Даниловский район',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
    tag: 'Рекомендуем',
  },
  {
    type: 'Студия в новом доме',
    price: '12,4 млн ₽',
    details: '31 м² · сдача в 2027',
    address: 'Москва, район Раменки',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
    tag: 'Новая цена',
  },
]

function App() {
  return (
    <main className="app-shell">
      <section className="phone" aria-label="Главная страница Циана">
        <header className="topbar">
          <button className="location" type="button" aria-label="Выбрать город">
            <MapPin size={18} strokeWidth={2.25} />
            <span>Москва</span>
            <ChevronRight size={15} />
          </button>
          <div className="top-actions">
            <button className="round-action" type="button" aria-label="Уведомления"><Bell size={19} /></button>
            <button className="avatar" type="button" aria-label="Профиль">К</button>
          </div>
        </header>

        <section className="hero">
          <p className="eyebrow">Поиск недвижимости</p>
          <h1>Где хотите жить?</h1>
          <p className="hero-copy">Начните с района, метро, адреса или названия жилого комплекса</p>

          <div className="search-panel" role="search">
            <button className="search-field" type="button">
              <Search size={21} />
              <span>Район, метро или ЖК</span>
            </button>
            <button className="filter-button" type="button" aria-label="Фильтры"><SlidersHorizontal size={20} /></button>
          </div>
          <div className="search-tags" aria-label="Быстрые параметры поиска">
            <button type="button">Купить</button>
            <button type="button">1–2 комнаты</button>
            <button type="button">На карте</button>
          </div>
        </section>

        <section className="jobs" aria-label="Выберите цель поиска">
          <div className="section-heading section-heading--jobs">
            <div>
              <p className="section-kicker">Выберите, что сейчас важно</p>
              <h2>Поможем с задачей</h2>
            </div>
          </div>
          <div className="job-row">
            {searchJobs.map((job, index) => (
              <button className={`job-card job-card--${index + 1}`} type="button" key={job.title}>
                <span>{job.title}</span>
                <small>{job.description}</small>
                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        </section>

        <section className="category-wrap" aria-label="Тип недвижимости">
          <div className="section-heading section-heading--categories">
            <div>
              <p className="section-kicker">Категории</p>
              <h2>Выберите формат</h2>
            </div>
          </div>
          <div className="category-scroll">
            {categories.map(({ label, icon: Icon }, index) => (
              <button className={`category ${index === 0 ? 'category--active' : ''}`} type="button" key={label}>
                <span className="category-icon"><Icon size={20} strokeWidth={2.15} /></span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="content">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Подборка для вас</p>
              <h2>Рядом с вами</h2>
            </div>
            <button className="all-link" type="button">Все <ChevronRight size={17} /></button>
          </div>

          <div className="listing-row" aria-label="Рекомендованные объявления">
            {listings.map((listing) => (
              <article className="listing-card" key={listing.address}>
                <div className="listing-image">
                  <img src={listing.image} alt="Интерьер квартиры" />
                  <span className="listing-tag">{listing.tag}</span>
                  <button className="like-button" type="button" aria-label="Добавить в избранное"><Heart size={18} /></button>
                </div>
                <div className="listing-info">
                  <h3>{listing.type}</h3>
                  <strong>{listing.price}</strong>
                  <p>{listing.details}</p>
                  <span><MapPin size={13} />{listing.address}</span>
                </div>
              </article>
            ))}
          </div>

          <aside className="promo-card">
            <div className="promo-copy">
              <span className="promo-label">Партнёрское предложение</span>
              <h2>Ипотека<br />без лишнего</h2>
              <p>Рассчитайте платёж за минуту</p>
              <button type="button">Рассчитать <ChevronRight size={16} /></button>
            </div>
            <div className="promo-orb promo-orb--one" />
            <div className="promo-orb promo-orb--two" />
            <div className="promo-house"><Home size={58} strokeWidth={1.35} /></div>
          </aside>

          <section className="fresh-searches" aria-label="Идеи для поиска">
            <div className="section-heading section-heading--compact">
              <h2>Начните поиск</h2>
            </div>
            <div className="search-chips">
              <button type="button">Квартиры у метро</button>
              <button type="button">Дома до 20 млн ₽</button>
              <button type="button">Новостройки с ключами</button>
            </div>
          </section>
        </section>

        <nav className="bottom-nav" aria-label="Основная навигация">
          <button className="nav-item nav-item--active" type="button"><Home size={22} fill="currentColor" /><span>Главная</span></button>
          <button className="nav-item" type="button"><Search size={22} /><span>Поиск</span></button>
          <button className="nav-item" type="button"><Heart size={22} /><span>Избранное</span></button>
          <button className="nav-item" type="button"><UserRound size={22} /><span>Профиль</span></button>
        </nav>
      </section>
    </main>
  )
}

export default App
