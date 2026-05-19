import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";
import player3 from "@/assets/player-3.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export type Role = "Batsman" | "Bowler" | "All-rounder" | "Wicketkeeper";

export const players = [
  { id: 1, name: "Arjun Sharma", role: "Batsman" as Role, image: player1, batting: "Right-hand", bowling: "—", runs: 4280, wickets: 12, captain: true },
  { id: 2, name: "Vikram Rao", role: "Bowler" as Role, image: player2, batting: "Right-hand", bowling: "Right-arm fast", runs: 620, wickets: 184 },
  { id: 3, name: "Rohit Mehra", role: "Wicketkeeper" as Role, image: player3, batting: "Left-hand", bowling: "—", runs: 2940, wickets: 0 },
  { id: 4, name: "Kabir Singh", role: "All-rounder" as Role, image: player1, batting: "Right-hand", bowling: "Right-arm medium", runs: 2110, wickets: 88 },
  { id: 5, name: "Ishaan Verma", role: "Batsman" as Role, image: player3, batting: "Right-hand", bowling: "—", runs: 3560, wickets: 4 },
  { id: 6, name: "Dev Kapoor", role: "Bowler" as Role, image: player2, batting: "Right-hand", bowling: "Left-arm spin", runs: 410, wickets: 142 },
];

export const coaches = [
  { id: 1, name: "Coach Rahul Dixit", image: coach1, role: "Head Coach", experience: "18+ Years", specialty: "Batting Technique", certifications: ["BCCI Level 3", "ICC Certified"] },
  { id: 2, name: "Coach Aman Bedi", image: coach2, role: "Bowling Coach", experience: "12+ Years", specialty: "Fast & Swing Bowling", certifications: ["BCCI Level 2", "Cricket Australia Cert."] },
  { id: 3, name: "Coach Neha Patel", image: coach3, role: "Strength & Conditioning", experience: "9+ Years", specialty: "Athletic Performance", certifications: ["NSCA-CSCS", "Sports Science MSc"] },
];

export const programs = [
  { id: 1, title: "Junior Cricket Training", desc: "Foundational coaching for ages 8–14 with skill drills, technique work, and match play.", duration: "12 weeks", fees: "$240/mo", level: "Beginner" },
  { id: 2, title: "Senior Cricket Training", desc: "Advanced tactics, fitness and match-fit conditioning for ages 15+.", duration: "16 weeks", fees: "$320/mo", level: "Intermediate" },
  { id: 3, title: "Fitness & Conditioning", desc: "Sports-science backed training to build power, agility and endurance.", duration: "8 weeks", fees: "$180/mo", level: "All levels" },
  { id: 4, title: "Summer Cricket Camp", desc: "Intensive 4-week immersion with daily nets, fitness, and tournament play.", duration: "4 weeks", fees: "$480", level: "All levels" },
  { id: 5, title: "1-on-1 Coaching", desc: "Private sessions with our head coaches tailored to your goals.", duration: "Per session", fees: "$80/hr", level: "All levels" },
  { id: 6, title: "Elite Pathway", desc: "Selective program for high-performance athletes targeting state and national selection.", duration: "Year-round", fees: "Apply", level: "Advanced" },
];

export const matches = [
  { id: 1, home: "Greenfield CA", away: "Royal Strikers", date: "Jun 12, 2026", venue: "Greenfield Oval", status: "Upcoming" },
  { id: 2, home: "Greenfield CA", away: "Northern Knights", date: "Jun 19, 2026", venue: "Northern Stadium", status: "Upcoming" },
  { id: 3, home: "Greenfield CA", away: "Coastal Tigers", date: "May 28, 2026", venue: "Greenfield Oval", status: "Won", scoreA: "248/6", scoreB: "212/10" },
  { id: 4, home: "Greenfield CA", away: "Mountain Lions", date: "May 21, 2026", venue: "Hilltop Ground", status: "Won", scoreA: "186/4", scoreB: "184/9" },
];

export const gallery = [g1, g2, g3, g4, g5, g6];

export const testimonials = [
  { name: "Priya Anand", role: "Parent", quote: "The transformation in my son's game in just six months has been remarkable. Coaches truly care.", rating: 5 },
  { name: "Karan Mehta", role: "U-19 Player", quote: "Greenfield's elite pathway helped me earn a state selection. The training is world-class.", rating: 5 },
  { name: "Sana Ali", role: "Senior Player", quote: "Best academy I've trained at. Facilities, coaching, and atmosphere are unmatched.", rating: 5 },
];

export const stats = [
  { label: "Players Trained", value: 1240 },
  { label: "Tournaments Won", value: 86 },
  { label: "Pro Coaches", value: 14 },
  { label: "Years Experience", value: 22 },
];
