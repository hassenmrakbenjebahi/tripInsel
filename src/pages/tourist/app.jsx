// Tourist UI kit — App router
function TouristApp() {
  const [route, setRoute] = useState({ name: 'home', params: {} });
  const go = (name, params = {}) => {
    setRoute({ name, params });
    window.scrollTo({ top: 0 });
  };
  const current = route.name === 'home' ? 'home' :
                  route.name === 'search' ? 'home' :
                  route.name;
  return (
    <div className="ti-page-tourist">
      <TouristNavbar
        onNavigate={go}
        current={current}
        onSearch={q => go('search', { query: q })}
        hideSearch={route.name === 'home'}
        signedIn={route.name === 'bookings' || route.name === 'booking'}
      />
      <main className="ti-page-content" key={route.name + JSON.stringify(route.params)}>
        {route.name === 'home' && <HomeScreen go={go} />}
        {route.name === 'search' && <SearchScreen params={route.params} go={go} />}
        {route.name === 'detail' && <DetailScreen params={route.params} go={go} />}
        {route.name === 'booking' && <BookingConfirmScreen params={route.params} go={go} />}
        {route.name === 'bookings' && <BookingsScreen go={go} />}
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TouristApp />);
