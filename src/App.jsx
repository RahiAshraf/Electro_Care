import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [showCustomerPassword, setShowCustomerPassword] = useState(false);
  const [showElectricianPassword, setShowElectricianPassword] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });

  const [electrician, setElectrician] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    specialization: "",
    experience: "",
    address: "",
  });

  const [electricianLogin, setElectricianLogin] = useState({
    email: "",
    password: "",
  });

  const [serviceRequest, setServiceRequest] = useState({
    service: "",
    date: "",
    time: "",
    address: "",
    description: "",
  });

  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [reviews, setReviews] = useState([]);

  const [reviewData, setReviewData] = useState({
    requestId: "",
    rating: "5",
    comment: "",
  });

  const services = [
    {
      name: "AC Repair & Service",
      icon: "❄️",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Refrigerator Repair",
      icon: "🧊",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Washing Machine Repair",
      icon: "🧺",
      price: 449,
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Geyser Repair",
      icon: "🔥",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "TV Repair",
      icon: "📺",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Microwave Repair",
      icon: "🍳",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Water Purifier Service",
      icon: "💧",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Inverter & UPS Service",
      icon: "⚡",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "House Wiring",
      icon: "🔌",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Light Installation",
      icon: "💡",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Fan Repair",
      icon: "🌀",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Electrical Repair",
      icon: "🔧",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Switch & Socket Repair",
      icon: "🔘",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "CCTV Installation",
      icon: "📹",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Doorbell Installation",
      icon: "🔔",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Solar Panel Service",
      icon: "☀️",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Generator Service",
      icon: "⚙️",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Exhaust Fan Repair",
      icon: "🌪️",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mixer Grinder Repair",
      icon: "🥤",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Iron Box Repair",
      icon: "👕",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Computer Electrical Repair",
      icon: "💻",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Water Motor Repair",
      icon: "🚰",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kitchen Chimney Service",
      icon: "🏠",
      price: 449,
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Home Appliance Installation",
      icon: "🏡",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // ---------------- CUSTOMER REGISTRATION ----------------

  const registerCustomer = (e) => {
    e.preventDefault();

    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.password
    ) {
      alert("Please fill all customer details.");
      return;
    }

    alert("✅ Customer registration successful!");

    setCustomer({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    setPage("customerLogin");
  };

  // ---------------- ELECTRICIAN REGISTRATION ----------------

  const registerElectrician = (e) => {
    e.preventDefault();

    if (
      !electrician.name ||
      !electrician.email ||
      !electrician.phone ||
      !electrician.password ||
      !electrician.specialization ||
      !electrician.experience ||
      !electrician.address
    ) {
      alert("Please fill all electrician details.");
      return;
    }

    alert("✅ Electrician registration successful!");

    setElectrician({
      name: "",
      email: "",
      phone: "",
      password: "",
      specialization: "",
      experience: "",
      address: "",
    });

    setPage("electricianLogin");
  };

  // ---------------- CUSTOMER LOGIN ----------------

  const loginCustomer = (e) => {
    e.preventDefault();

    if (!customerLogin.email || !customerLogin.password) {
      alert("Please enter email and password.");
      return;
    }

    setLoggedInUser({
      type: "customer",
      email: customerLogin.email,
    });

    alert("✅ Customer login successful!");

    setPage("customerDashboard");
  };

  // ---------------- ELECTRICIAN LOGIN ----------------

  const loginElectrician = (e) => {
    e.preventDefault();

    if (!electricianLogin.email || !electricianLogin.password) {
      alert("Please enter email and password.");
      return;
    }

    setLoggedInUser({
      type: "electrician",
      email: electricianLogin.email,
    });

    alert("✅ Electrician login successful!");

    setPage("electricianDashboard");
  };

  // ---------------- LOGOUT ----------------

  const logout = () => {
    setLoggedInUser(null);
    setPage("home");
  };

  // ---------------- BOOK SERVICE ----------------

  const bookService = (serviceName) => {
    if (!loggedInUser) {
      alert("Please login as a customer before booking a service.");
      setPage("customerLogin");
      return;
    }

    if (loggedInUser.type !== "customer") {
      alert("Only customers can book services.");
      return;
    }

    setServiceRequest({
      service: serviceName,
      date: "",
      time: "",
      address: "",
      description: "",
    });

    setPage("serviceRequest");
  };

  // ---------------- CREATE REQUEST ----------------

  const createRequest = (e) => {
    e.preventDefault();

    if (
      !serviceRequest.service ||
      !serviceRequest.date ||
      !serviceRequest.time ||
      !serviceRequest.address
    ) {
      alert("Please fill all required booking details.");
      return;
    }

    const selected = services.find(
      (service) => service.name === serviceRequest.service,
    );

    const newRequest = {
      ...serviceRequest,
      id: Date.now(),
      customer: loggedInUser?.email || "Customer",
      status: "Pending",
      price: selected ? selected.price : 0,
    };

    setRequests((oldRequests) => [...oldRequests, newRequest]);

    alert("✅ Service booked successfully!");

    setPage("myRequests");
  };

  // ---------------- UPDATE REQUEST ----------------

  const updateRequestStatus = (id, status) => {
    setRequests((oldRequests) =>
      oldRequests.map((request) =>
        request.id === id ? { ...request, status } : request,
      ),
    );
  };

  // ---------------- REVIEW ----------------

  const addReview = (e) => {
    e.preventDefault();

    if (!reviewData.requestId || !reviewData.comment) {
      alert("Please select a service and write your review.");
      return;
    }

    const request = requests.find(
      (item) => item.id === Number(reviewData.requestId),
    );

    const newReview = {
      id: Date.now(),
      service: request?.service,
      rating: reviewData.rating,
      comment: reviewData.comment,
    };

    setReviews((oldReviews) => [...oldReviews, newReview]);

    setReviewData({
      requestId: "",
      rating: "5",
      comment: "",
    });

    alert("⭐ Review submitted successfully!");
  };

  // ---------------- NAVBAR ----------------

  const Navbar = () => (
    <nav className="navbar">
      <div className="logo" onClick={() => setPage("home")}>
        ⚡ ElectroCare
      </div>

      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("services")}>Services</button>
        <button onClick={() => setPage("help")}>Help</button>
        <button onClick={() => setPage("contact")}>Contact</button>

        {!loggedInUser && (
          <>
            <button onClick={() => setPage("customerLogin")}>
              Customer Login
            </button>

            <button onClick={() => setPage("electricianLogin")}>
              Electrician Login
            </button>

            <button onClick={() => setPage("customerRegister")}>
              Customer Register
            </button>

            <button onClick={() => setPage("electricianRegister")}>
              Electrician Register
            </button>
          </>
        )}

        {loggedInUser && (
          <>
            <button
              onClick={() =>
                setPage(
                  loggedInUser.type === "customer"
                    ? "customerDashboard"
                    : "electricianDashboard",
                )
              }
            >
              Dashboard
            </button>

            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );

  // ---------------- HOME ----------------

  const Home = () => (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">⚡ Trusted Home Services</span>

          <h1>
            Professional
            <br />
            Electrical Services
          </h1>

          <p>
            Book trusted electricians and home appliance professionals quickly
            and easily.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setPage("services")}>
              Explore Services
            </button>

            <button className="secondary-btn" onClick={() => setPage("about")}>
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image-box">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=85"
            alt="Professional electrician"
          />

          <div className="floating-card">
            ⚡
            <div>
              <strong>Fast Service</strong>
              <small>Professional Experts</small>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose ElectroCare?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <span>👨‍🔧</span>
            <h3>Professional Experts</h3>
            <p>Experienced service professionals.</p>
          </div>

          <div className="feature-card">
            <span>⚡</span>
            <h3>Quick Service</h3>
            <p>Easy and convenient booking.</p>
          </div>

          <div className="feature-card">
            <span>💰</span>
            <h3>Affordable</h3>
            <p>Reasonable service prices.</p>
          </div>

          <div className="feature-card">
            <span>⭐</span>
            <h3>Customer Reviews</h3>
            <p>Rate and review completed services.</p>
          </div>
        </div>
      </section>
    </>
  );

  // ---------------- SERVICES ----------------

  const Services = () => {
    const filteredServices = services.filter((service) =>
      service.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <section className="services-section">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Professional Home Services</h2>
          <p>Find professional repair and electrical services near you.</p>
        </div>

        <input
          className="service-search"
          type="text"
          placeholder="🔍 Search for a service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="service-grid">
          {filteredServices.map((service) => (
            <div className="service-card" key={service.name}>
              <div className="service-image">
                <img src={service.image} alt={service.name} />

                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="service-card-content">
                <h3>{service.name}</h3>

                <p>
                  Starting from <strong>₹{service.price}</strong>
                </p>

                <button
                  className="primary-btn"
                  onClick={() => bookService(service.name)}
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // =====================================================
  // CUSTOMER REGISTER
  // =====================================================

  const CustomerRegister = () => (
    <section className="auth-page customer-register-page">
      <div className="auth-overlay"></div>

      <div className="auth-container">
        <div className="auth-image-panel customer-panel">
          <div className="auth-image-content">
            <div className="big-auth-icon">👤</div>

            <h1>Welcome to ElectroCare</h1>

            <p>
              Create your customer account and book professional home services
              whenever you need them.
            </p>

            <div className="auth-benefits">
              <div>✓ Easy service booking</div>
              <div>✓ Track your requests</div>
              <div>✓ Review completed services</div>
              <div>✓ Quick customer support</div>
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <form className="auth-card" onSubmit={registerCustomer}>
            <div className="auth-title">
              <span>CREATE ACCOUNT</span>
              <h2>Customer Registration</h2>
              <p>Register to book home services</p>
            </div>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    name: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={customer.email}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    phone: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-box">
                <input
                  type={showCustomerPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={customer.password}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      password: e.target.value,
                    })
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowCustomerPassword(!showCustomerPassword)}
                >
                  {showCustomerPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button className="auth-submit-btn" type="submit">
              Create Customer Account →
            </button>

            <div className="auth-switch">
              Already have an account?
              <button type="button" onClick={() => setPage("customerLogin")}>
                Login
              </button>
            </div>

            <button
              type="button"
              className="back-home-btn"
              onClick={() => setPage("home")}
            >
              ← Back to Home
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // =====================================================
  // CUSTOMER LOGIN
  // =====================================================

  const CustomerLogin = () => (
    <section className="auth-page customer-login-page">
      <div className="auth-overlay"></div>

      <div className="auth-container login-container">
        <div className="auth-image-panel customer-login-panel">
          <div className="auth-image-content">
            <div className="big-auth-icon">🔐</div>

            <h1>Welcome Back!</h1>

            <p>
              Login to your ElectroCare customer account and manage your home
              service bookings.
            </p>

            <div className="login-feature">
              <span>⚡</span>
              <div>
                <strong>Quick Booking</strong>
                <small>Book services easily</small>
              </div>
            </div>

            <div className="login-feature">
              <span>📋</span>
              <div>
                <strong>Track Requests</strong>
                <small>Check your service status</small>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <form className="auth-card" onSubmit={loginCustomer}>
            <div className="auth-title">
              <span>WELCOME BACK</span>
              <h2>Customer Login</h2>
              <p>Login to continue to your dashboard</p>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={customerLogin.email}
                onChange={(e) =>
                  setCustomerLogin({
                    ...customerLogin,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-box">
                <input
                  type={showCustomerPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={customerLogin.password}
                  onChange={(e) =>
                    setCustomerLogin({
                      ...customerLogin,
                      password: e.target.value,
                    })
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowCustomerPassword(!showCustomerPassword)}
                >
                  {showCustomerPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button className="auth-submit-btn" type="submit">
              Login as Customer →
            </button>

            <div className="auth-switch">
              New customer?
              <button type="button" onClick={() => setPage("customerRegister")}>
                Create Account
              </button>
            </div>

            <button
              type="button"
              className="switch-role-btn"
              onClick={() => setPage("electricianLogin")}
            >
              👨‍🔧 Login as Electrician
            </button>

            <button
              type="button"
              className="back-home-btn"
              onClick={() => setPage("home")}
            >
              ← Back to Home
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // =====================================================
  // ELECTRICIAN REGISTER
  // =====================================================

  const ElectricianRegister = () => (
    <section className="auth-page electrician-register-page">
      <div className="auth-overlay"></div>

      <div className="auth-container">
        <div className="auth-image-panel electrician-panel">
          <div className="auth-image-content">
            <div className="big-auth-icon">👨‍🔧</div>

            <h1>Join ElectroCare</h1>

            <p>
              Register as a professional electrician and connect with customers
              looking for reliable home services.
            </p>

            <div className="auth-benefits">
              <div>✓ Receive service requests</div>
              <div>✓ Manage customer bookings</div>
              <div>✓ Update work status</div>
              <div>✓ Build your professional profile</div>
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <form
            className="auth-card electrician-form"
            onSubmit={registerElectrician}
          >
            <div className="auth-title">
              <span>PROFESSIONAL REGISTRATION</span>
              <h2>Electrician Registration</h2>
              <p>Create your professional account</p>
            </div>

            <input
              ref={electricianNameRef}
              type="text"
              placeholder="Full Name"
              value={electrician.name}
              onChange={(e) => {
                const value = e.target.value;

                setElectrician({
                  ...electrician,
                  name: value,
                });

                keepCursorAtEnd(electricianNameRef, value);
              }}
              required
            />

            <input
              ref={electricianEmailRef}
              type="email"
              placeholder="Email"
              value={electrician.email}
              onChange={(e) => {
                const value = e.target.value;

                setElectrician({
                  ...electrician,
                  email: value,
                });

                keepCursorAtEnd(electricianEmailRef, value);
              }}
              required
            />

            <input
              ref={electricianPhoneRef}
              type="tel"
              placeholder="Phone Number"
              value={electrician.phone}
              onChange={(e) => {
                const value = e.target.value;

                setElectrician({
                  ...electrician,
                  phone: value,
                });

                keepCursorAtEnd(electricianPhoneRef, value);
              }}
              required
            />

            <input
              ref={electricianPasswordRef}
              type="password"
              placeholder="Password"
              value={electrician.password}
              onChange={(e) => {
                const value = e.target.value;

                setElectrician({
                  ...electrician,
                  password: value,
                });

                keepCursorAtEnd(electricianPasswordRef, value);
              }}
              required
            />

            <input
              ref={electricianSpecializationRef}
              type="text"
              placeholder="Specialization"
              value={electrician.specialization}
              onChange={(e) => {
                const value = e.target.value;

                setElectrician({
                  ...electrician,
                  specialization: value,
                });

                keepCursorAtEnd(electricianSpecializationRef, value);
              }}
              required
            />

            <input
              ref={electricianExperienceRef}
              type="number"
              placeholder="Years of Experience"
              value={electrician.experience}
              onChange={(e) => {
                const value = e.target.value;

                setElectrician({
                  ...electrician,
                  experience: value,
                });

                keepCursorAtEnd(electricianExperienceRef, value);
              }}
              required
            />

            <textarea
              ref={electricianAddressRef}
              placeholder="Address"
              value={electrician.address}
              onChange={(e) => {
                const value = e.target.value;

                setElectrician({
                  ...electrician,
                  address: value,
                });

                keepCursorAtEnd(electricianAddressRef, value);
              }}
              required
            />

            <button className="auth-submit-btn electrician-btn" type="submit">
              Register as Electrician →
            </button>

            <div className="auth-switch">
              Already registered?
              <button type="button" onClick={() => setPage("electricianLogin")}>
                Login
              </button>
            </div>

            <button
              type="button"
              className="back-home-btn"
              onClick={() => setPage("home")}
            >
              ← Back to Home
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // =====================================================
  // ELECTRICIAN LOGIN
  // =====================================================

  const ElectricianLogin = () => (
    <section className="auth-page electrician-login-page">
      <div className="auth-overlay"></div>

      <div className="auth-container login-container">
        <div className="auth-image-panel electrician-login-panel">
          <div className="auth-image-content">
            <div className="big-auth-icon">⚡</div>

            <h1>Electrician Portal</h1>

            <p>
              Login to manage your service requests and provide professional
              electrical services.
            </p>

            <div className="login-feature">
              <span>📋</span>
              <div>
                <strong>Manage Requests</strong>
                <small>Accept or reject bookings</small>
              </div>
            </div>

            <div className="login-feature">
              <span>🔧</span>
              <div>
                <strong>Update Work</strong>
                <small>Track your service progress</small>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <form className="auth-card" onSubmit={loginElectrician}>
            <div className="auth-title">
              <span>PROFESSIONAL LOGIN</span>
              <h2>Electrician Login</h2>
              <p>Login to your electrician dashboard</p>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={electricianLogin.email}
                onChange={(e) =>
                  setElectricianLogin({
                    ...electricianLogin,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-box">
                <input
                  type={showElectricianPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={electricianLogin.password}
                  onChange={(e) =>
                    setElectricianLogin({
                      ...electricianLogin,
                      password: e.target.value,
                    })
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowElectricianPassword(!showElectricianPassword)
                  }
                >
                  {showElectricianPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button className="auth-submit-btn electrician-btn" type="submit">
              Login as Electrician →
            </button>

            <div className="auth-switch">
              New electrician?
              <button
                type="button"
                onClick={() => setPage("electricianRegister")}
              >
                Create Account
              </button>
            </div>

            <button
              type="button"
              className="switch-role-btn"
              onClick={() => setPage("customerLogin")}
            >
              👤 Login as Customer
            </button>

            <button
              type="button"
              className="back-home-btn"
              onClick={() => setPage("home")}
            >
              ← Back to Home
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // =====================================================
  // CUSTOMER DASHBOARD
  // =====================================================

  const CustomerDashboard = () => (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <span>CUSTOMER DASHBOARD</span>
        <h2>Welcome to ElectroCare 👋</h2>
        <p>{loggedInUser?.email}</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="dashboard-icon">🔧</div>
          <h3>Book Service</h3>
          <p>Book an electrician or appliance service.</p>
          <button className="primary-btn" onClick={() => setPage("services")}>
            Book Now
          </button>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">📋</div>
          <h3>My Requests</h3>
          <p>Track all your service requests.</p>
          <button className="primary-btn" onClick={() => setPage("myRequests")}>
            View Requests
          </button>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">⭐</div>
          <h3>Reviews</h3>
          <p>Review completed services.</p>
          <button className="primary-btn" onClick={() => setPage("reviews")}>
            Review Service
          </button>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">🆘</div>
          <h3>Help</h3>
          <p>Get help with your booking.</p>
          <button className="primary-btn" onClick={() => setPage("help")}>
            Get Help
          </button>
        </div>
      </div>
    </div>
  );

  // =====================================================
  // SERVICE REQUEST
  // =====================================================

  const ServiceRequest = () => (
    <div className="form-page">
      <form className="form-card booking-card" onSubmit={createRequest}>
        <div className="auth-title">
          <span>SERVICE BOOKING</span>
          <h2>🔧 Book a Service</h2>
          <p>Enter your service requirements</p>
        </div>

        <div className="input-group">
          <label>Select Service</label>

          <select
            value={serviceRequest.service}
            onChange={(e) =>
              setServiceRequest({
                ...serviceRequest,
                service: e.target.value,
              })
            }
            required
          >
            <option value="">Select Service</option>

            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} - ₹{service.price}
              </option>
            ))}
          </select>
        </div>

        <div className="two-inputs">
          <div className="input-group">
            <label>Service Date</label>
            <input
              type="date"
              value={serviceRequest.date}
              onChange={(e) =>
                setServiceRequest({
                  ...serviceRequest,
                  date: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="input-group">
            <label>Service Time</label>
            <input
              type="time"
              value={serviceRequest.time}
              onChange={(e) =>
                setServiceRequest({
                  ...serviceRequest,
                  time: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Service Address</label>
          <textarea
            placeholder="Enter complete service address"
            value={serviceRequest.address}
            onChange={(e) =>
              setServiceRequest({
                ...serviceRequest,
                address: e.target.value,
              })
            }
            required
          ></textarea>
        </div>

        <div className="input-group">
          <label>Describe Your Problem</label>
          <textarea
            placeholder="Describe the problem..."
            value={serviceRequest.description}
            onChange={(e) =>
              setServiceRequest({
                ...serviceRequest,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>

        <button className="auth-submit-btn" type="submit">
          Confirm Booking →
        </button>
      </form>
    </div>
  );

  // =====================================================
  // MY REQUESTS
  // =====================================================

  const MyRequests = () => (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <span>MY SERVICES</span>
        <h2>📋 My Service Requests</h2>
      </div>

      {requests.length === 0 ? (
        <div className="empty-box">
          <div className="empty-icon">📭</div>
          <h3>No service requests yet.</h3>

          <button className="primary-btn" onClick={() => setPage("services")}>
            Book a Service
          </button>
        </div>
      ) : (
        <div className="request-grid">
          {requests.map((request) => (
            <div className="request-card" key={request.id}>
              <div className="request-icon">🔧</div>

              <h3>{request.service}</h3>

              <p>
                <strong>Date:</strong> {request.date}
              </p>

              <p>
                <strong>Time:</strong> {request.time}
              </p>

              <p>
                <strong>Address:</strong> {request.address}
              </p>

              <p>
                <strong>Problem:</strong>{" "}
                {request.description || "Not provided"}
              </p>

              <p>
                <strong>Price:</strong> ₹{request.price}
              </p>

              <div
                className={`status status-${request.status.replace(" ", "-").toLowerCase()}`}
              >
                {request.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // =====================================================
  // ELECTRICIAN DASHBOARD
  // =====================================================

  const ElectricianDashboard = () => (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <span>ELECTRICIAN DASHBOARD</span>
        <h2>👨‍🔧 Service Management</h2>
        <p>{loggedInUser?.email}</p>
      </div>

      <div className="dashboard-info">
        <div>
          <strong>Total Requests</strong>
          <span>{requests.length}</span>
        </div>

        <div>
          <strong>Pending</strong>
          <span>{requests.filter((r) => r.status === "Pending").length}</span>
        </div>

        <div>
          <strong>In Progress</strong>
          <span>
            {requests.filter((r) => r.status === "In Progress").length}
          </span>
        </div>

        <div>
          <strong>Completed</strong>
          <span>{requests.filter((r) => r.status === "Completed").length}</span>
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="empty-box">
          <div className="empty-icon">📭</div>
          <h3>No service requests available.</h3>
        </div>
      ) : (
        <div className="request-grid">
          {requests.map((request) => (
            <div className="request-card" key={request.id}>
              <div className="request-icon">⚡</div>

              <h3>{request.service}</h3>

              <p>
                <strong>Customer:</strong> {request.customer}
              </p>

              <p>
                <strong>Date:</strong> {request.date}
              </p>

              <p>
                <strong>Time:</strong> {request.time}
              </p>

              <p>
                <strong>Address:</strong> {request.address}
              </p>

              <p>
                <strong>Problem:</strong>{" "}
                {request.description || "Not provided"}
              </p>

              <div className="status">{request.status}</div>

              <div className="button-group">
                {request.status === "Pending" && (
                  <>
                    <button
                      className="accept-btn"
                      onClick={() =>
                        updateRequestStatus(request.id, "Accepted")
                      }
                    >
                      ✓ Accept
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        updateRequestStatus(request.id, "Rejected")
                      }
                    >
                      ✕ Reject
                    </button>
                  </>
                )}

                {request.status === "Accepted" && (
                  <button
                    className="primary-btn"
                    onClick={() =>
                      updateRequestStatus(request.id, "In Progress")
                    }
                  >
                    🔧 Start Work
                  </button>
                )}

                {request.status === "In Progress" && (
                  <button
                    className="complete-btn"
                    onClick={() => updateRequestStatus(request.id, "Completed")}
                  >
                    ✓ Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // =====================================================
  // REVIEWS
  // =====================================================

  const Reviews = () => {
    const completedRequests = requests.filter(
      (request) => request.status === "Completed",
    );

    return (
      <div className="form-page">
        <form className="form-card booking-card" onSubmit={addReview}>
          <div className="auth-title">
            <span>CUSTOMER FEEDBACK</span>
            <h2>⭐ Service Review</h2>
            <p>Share your experience</p>
          </div>

          {completedRequests.length === 0 ? (
            <div className="empty-review">
              <div>⭐</div>
              <p>No completed services available for review.</p>
            </div>
          ) : (
            <>
              <div className="input-group">
                <label>Select Completed Service</label>

                <select
                  value={reviewData.requestId}
                  onChange={(e) =>
                    setReviewData({
                      ...reviewData,
                      requestId: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Service</option>

                  {completedRequests.map((request) => (
                    <option key={request.id} value={request.id}>
                      {request.service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>Rating</label>

                <select
                  value={reviewData.rating}
                  onChange={(e) =>
                    setReviewData({
                      ...reviewData,
                      rating: e.target.value,
                    })
                  }
                >
                  <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                  <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                  <option value="3">⭐⭐⭐ 3 Stars</option>
                  <option value="2">⭐⭐ 2 Stars</option>
                  <option value="1">⭐ 1 Star</option>
                </select>
              </div>

              <div className="input-group">
                <label>Your Review</label>

                <textarea
                  placeholder="Write your review..."
                  value={reviewData.comment}
                  onChange={(e) =>
                    setReviewData({
                      ...reviewData,
                      comment: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>

              <button className="auth-submit-btn" type="submit">
                Submit Review ⭐
              </button>
            </>
          )}

          {reviews.length > 0 && (
            <div className="review-list">
              <h3>Customer Reviews</h3>

              {reviews.map((review) => (
                <div className="review-card" key={review.id}>
                  <h4>{review.service}</h4>
                  <p>{"⭐".repeat(Number(review.rating))}</p>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    );
  };

  // =====================================================
  // HELP
  // =====================================================

  const Help = () => (
    <div className="help-page">
      <div className="section-heading">
        <span>SUPPORT CENTER</span>
        <h2>🆘 Help & Support</h2>
        <p>Find answers to common questions.</p>
      </div>

      <div className="help-grid">
        <div className="help-card">
          <span>📅</span>
          <h3>How do I book a service?</h3>
          <p>
            Open Services, select your service, choose date and time, enter your
            address and confirm your booking.
          </p>
        </div>

        <div className="help-card">
          <span>📋</span>
          <h3>How can I track my request?</h3>
          <p>
            Login as a customer and open My Requests to check your service
            status.
          </p>
        </div>

        <div className="help-card">
          <span>👨‍🔧</span>
          <h3>Electrician help</h3>
          <p>
            Electricians can login and manage customer service requests from
            their dashboard.
          </p>
        </div>

        <div className="help-card">
          <span>⭐</span>
          <h3>How can I give a review?</h3>
          <p>
            After a request is completed, open Reviews and submit your rating
            and feedback.
          </p>
        </div>

        <div className="help-card">
          <span>🔐</span>
          <h3>Login problem?</h3>
          <p>Check your email and password and try again.</p>
        </div>

        <div className="help-card">
          <span>📞</span>
          <h3>Need direct support?</h3>
          <p>
            Phone: +91 98765 43210
            <br />
            Email: support@electrocare.com
          </p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>Can I book multiple services?</summary>
          <p>Yes. You can create separate requests for different services.</p>
        </details>

        <details>
          <summary>Can I see service prices?</summary>
          <p>Yes. Starting prices are displayed on the Services page.</p>
        </details>

        <details>
          <summary>Can an electrician reject a request?</summary>
          <p>Yes. Pending requests can be accepted or rejected.</p>
        </details>
      </div>
    </div>
  );

  // =====================================================
  // ABOUT
  // =====================================================

  const About = () => (
    <div className="info-page">
      <div className="section-heading">
        <span>ABOUT US</span>
        <h2>About ElectroCare</h2>
      </div>

      <img
        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85"
        alt="Electrical service"
      />

      <div className="info-content">
        <h3>Who We Are</h3>

        <p>
          ElectroCare is a home service management system that connects
          customers with electricians and appliance service professionals.
        </p>

        <h3>Our Services</h3>

        <p>
          We provide AC repair, refrigerator repair, washing machine repair,
          wiring, lighting, CCTV installation, solar services and many other
          home services.
        </p>

        <h3>Our Goal</h3>

        <p>
          Our goal is to make home service booking simple, convenient and
          organized.
        </p>
      </div>
    </div>
  );

  // =====================================================
  // CONTACT
  // =====================================================

  const Contact = () => (
    <div className="contact-page">
      <div className="contact-info">
        <span>CONTACT US</span>
        <h2>We are here to help.</h2>

        <p>📞 +91 98765 43210</p>
        <p>📧 support@electrocare.com</p>
        <p>📍 Andhra Pradesh, India</p>
        <p>🕒 9:00 AM - 8:00 PM</p>
      </div>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("✅ Your message has been submitted!");
        }}
      >
        <h2>Send Us a Message</h2>

        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <input type="text" placeholder="Subject" required />

        <textarea placeholder="Write your message..." required></textarea>

        <button className="auth-submit-btn" type="submit">
          Send Message →
        </button>
      </form>
    </div>
  );

  // =====================================================
  // RENDER PAGE
  // =====================================================

  const renderPage = () => {
    switch (page) {
      case "home":
        return Home();

      case "services":
        return Services();

      case "customerRegister":
        return CustomerRegister();

      case "customerLogin":
        return CustomerLogin();

      case "electricianRegister":
        return ElectricianRegister();

      case "electricianLogin":
        return ElectricianLogin();

      case "customerDashboard":
        return CustomerDashboard();

      case "electricianDashboard":
        return ElectricianDashboard();

      case "serviceRequest":
        return ServiceRequest();

      case "myRequests":
        return MyRequests();

      case "reviews":
        return Reviews();

      case "help":
        return Help();

      case "about":
        return About();

      case "contact":
        return Contact();

      default:
        return Home();
    }
  };

  const customerNameRef = useRef(null);
  const customerEmailRef = useRef(null);
  const customerPhoneRef = useRef(null);
  const customerPasswordRef = useRef(null);

  const customerLoginEmailRef = useRef(null);
  const customerLoginPasswordRef = useRef(null);

  const electricianNameRef = useRef(null);
  const electricianEmailRef = useRef(null);
  const electricianPhoneRef = useRef(null);
  const electricianPasswordRef = useRef(null);
  const electricianSpecializationRef = useRef(null);
  const electricianExperienceRef = useRef(null);
  const electricianAddressRef = useRef(null);

  const electricianLoginEmailRef = useRef(null);
  const electricianLoginPasswordRef = useRef(null);
  const searchRef = useRef(null);

  const keepCursorAtEnd = (ref, value) => {
    requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.focus();

        ref.current.setSelectionRange(value.length, value.length);
      }
    });
  };

  return (
    <div className="app">
      {Navbar()}

      <main>{renderPage()}</main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>⚡ ElectroCare</h3>
            <p>Professional electrical and home appliance services.</p>
          </div>

          <div>
            <h4>Quick Links</h4>

            <button onClick={() => setPage("home")}>Home</button>

            <button onClick={() => setPage("services")}>Services</button>

            <button onClick={() => setPage("about")}>About</button>

            <button onClick={() => setPage("help")}>Help</button>
          </div>

          <div>
            <h4>Support</h4>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@electrocare.com</p>
            <p>🕒 9 AM - 8 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 ElectroCare | Home Service Management System
        </div>
      </footer>
    </div>
  );
}

export default App;
