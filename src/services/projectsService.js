const STORAGE_KEY = "projects";


const seedProjects = [
{
id: "p-1",
title: "My Portfolio",
description: "A simple React portfolio to showcase my work",
url: "https://example.com",
status: "published",
createdAt: new Date().toISOString(),
updatedAt: new Date().toISOString(),
},
];


function load() {
try {
const raw = localStorage.getItem(STORAGE_KEY);
return raw ? JSON.parse(raw) : [];
} catch {
return [];
}
}


function save(list) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}


export function getProjects() {
const list = load();
if (list.length === 0) {
save(seedProjects);
return seedProjects;
}
return list;
}


export function addProject(data) {
const id = (crypto?.randomUUID && crypto.randomUUID()) || String(Date.now());
const now = new Date().toISOString();
const newItem = { id, createdAt: now, updatedAt: now, ...data };
const list = [newItem, ...load()];
save(list);
return newItem;
}


export function updateProject(id, partial) {
const list = load();
const idx = list.findIndex((p) => p.id === id);
if (idx === -1) throw new Error("Project not found");
const updated = { ...list[idx], ...partial, updatedAt: new Date().toISOString() };
list[idx] = updated;
save(list);
return updated;
}


export function deleteProject(id) {
const list = load();
const next = list.filter((p) => p.id !== id);
save(next);
}


export function resetProjects() {
save(seedProjects);
return seedProjects;
}