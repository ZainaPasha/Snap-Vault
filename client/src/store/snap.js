import { create } from "zustand";

export const useSnapStore = create((set) => ({
  snaps: [],
  setSnaps: (snaps) => set({ snaps }),
  createSnap: async (newSnap) => {
    if (!newSnap.title || !newSnap.description || !newSnap.image) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/snaps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSnap),
    });
    const data = await res.json();
    set((state) => ({ snaps: [...state.snaps, data.data] }));
    return { success: true, message: "Snap created successfully" };
  },
  fetchSnap: async () => {
    const res = await fetch("/api/snaps");
    const data = await res.json();
    set({ snaps: data.data });
  },
  deleteSnap: async (pid) => {
    const res = await fetch(`/api/snaps/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({ snaps: state.snaps.filter((snap) => snap._id !== pid) }));
    return { success: true, message: data.message };
  },
  updateSnap: async (pid, updatedSnap) => {
    const res = await fetch(`/api/snaps/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSnap),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      snaps: state.snaps.map((snap) => (snap._id === pid ? data.data : snap)),
    }));

    return { success: true, message: data.message };
  },
}));
