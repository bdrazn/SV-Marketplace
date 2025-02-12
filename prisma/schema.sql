-- Enable foreign key constraints
PRAGMA foreign_keys = ON;

-- Users table
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT CHECK(role IN ('student', 'vendor')) NOT NULL DEFAULT 'student',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  vendor_id INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (vendor_id) REFERENCES users(id)
);

-- Bookings table
CREATE TABLE bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,
  service_id INTEGER NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  status TEXT CHECK(status IN ('pending', 'confirmed', 'cancelled')) NOT NULL DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (service_id) REFERENCES services(id)
);

-- Skills table
CREATE TABLE skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL
);

-- Vendor Skills table (for many-to-many relationship between vendors and skills)
CREATE TABLE vendor_skills (
  vendor_id INTEGER NOT NULL,
  skill_id INTEGER NOT NULL,
  PRIMARY KEY (vendor_id, skill_id),
  FOREIGN KEY (vendor_id) REFERENCES users(id),
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

-- Insert some sample data
INSERT INTO users (name, email, password, role) VALUES
('John Doe', 'john@example.com', 'password123', 'vendor'),
('Jane Smith', 'jane@example.com', 'password456', 'vendor'),
('Alice Johnson', 'alice@example.com', 'password789', 'student');

INSERT INTO services (name, description, vendor_id, price) VALUES
('Web Development', 'Custom website development', 1, 500.00),
('Logo Design', 'Professional logo design', 1, 200.00),
('Content Writing', 'SEO-optimized content writing', 2, 100.00);

INSERT INTO skills (name) VALUES
('Web Development'),
('Graphic Design'),
('Content Writing'),
('SEO');

INSERT INTO vendor_skills (vendor_id, skill_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4);

