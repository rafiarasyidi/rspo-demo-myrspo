// ==========================================
// LOGIN PAGE FUNCTIONS
// ==========================================

// Handle login form submission
function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission
  
  // In a real app, you would validate credentials here
  // For demo purposes, just redirect to home page
  window.location.href = 'home-page.html';
  
  return false;
}

// Show member modal
function showMemberModal() {
  const modal = document.getElementById('memberModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

// Close member modal
function closeMemberModal() {
  const modal = document.getElementById('memberModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Show coming soon alert
function showComingSoon(feature) {
  alert(feature + ' - Coming Soon!\n\nThis feature is currently under development and will be available soon.');
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeMemberModal();
  }
});


// ==========================================
// HOME PAGE FUNCTIONS
// ==========================================

// Initialize home page functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('sidebar-open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
      if (window.innerWidth < 1024 && 
          !sidebar.contains(event.target) && 
          !menuToggle.contains(event.target) &&
          sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
      }
    });
  }
});

// ==========================================
// ACOP PAGE FUNCTIONS
// ==========================================

// Show/hide different views
function showView(viewId) {
  // Hide all views
  const views = ['view-acop', 'view-submission', 'view-report', 'view-resources', 'view-guidelines'];
  views.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('hidden');
    }
  });
  
  // Show selected view
  const selectedView = document.getElementById(viewId);
  if (selectedView) {
    selectedView.classList.remove('hidden');
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Reset ACOP tabs to table view when entering report view
  if (viewId === 'view-report') {
    showACOPTab('table');
  }
}

// Toggle between table and dashboard views in ACOP Report
function showACOPTab(tabName) {
  const tableView = document.getElementById('acop-table-view');
  const dashboardView = document.getElementById('acop-dashboard-view');
  const tableTab = document.getElementById('tab-table');
  const dashboardTab = document.getElementById('tab-dashboard');
  
  if (tabName === 'table') {
    // Show table, hide dashboard
    if (tableView) tableView.classList.remove('hidden');
    if (dashboardView) dashboardView.classList.add('hidden');
    
    // Update tab styling
    if (tableTab) {
      tableTab.classList.add('text-orange-600', 'border-b-2', 'border-orange-600');
      tableTab.classList.remove('text-gray-600');
    }
    if (dashboardTab) {
      dashboardTab.classList.remove('text-orange-600', 'border-b-2', 'border-orange-600');
      dashboardTab.classList.add('text-gray-600');
    }
  } else if (tabName === 'dashboard') {
    // Show dashboard, hide table
    if (tableView) tableView.classList.add('hidden');
    if (dashboardView) dashboardView.classList.remove('hidden');
    
    // Update tab styling
    if (dashboardTab) {
      dashboardTab.classList.add('text-orange-600', 'border-b-2', 'border-orange-600');
      dashboardTab.classList.remove('text-gray-600');
    }
    if (tableTab) {
      tableTab.classList.remove('text-orange-600', 'border-b-2', 'border-orange-600');
      tableTab.classList.add('text-gray-600');
    }
  }
}

// Toggle user menu dropdown
function toggleUserMenu() {
  const userMenu = document.getElementById('userMenu');
  if (userMenu) {
    userMenu.classList.toggle('hidden');
  }
}

// Show contact modal
function showContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Close contact modal
function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Logout function
function logout() {
  window.location.href = 'index.html';
}

// Show coming soon alert
function showComingSoon(feature) {
  alert(feature + ' - Coming Soon!\n\nThis feature is currently under development and will be available soon.');
}

// Close user menu when clicking outside
document.addEventListener('click', function(event) {
  const userDropdown = document.getElementById('userDropdown');
  const userMenu = document.getElementById('userMenu');
  
  if (userMenu && userDropdown && !userDropdown.contains(event.target)) {
    userMenu.classList.add('hidden');
  }
});

// Close contact modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('contactModal');
  if (modal && event.target === modal) {
    closeContactModal();
  }
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeContactModal();
  }
});